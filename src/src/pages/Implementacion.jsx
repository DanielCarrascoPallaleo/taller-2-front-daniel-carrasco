import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

export const Implementacion = () => {
    const { listaPokemons, cargarData } = useContext(PokemonContext);
    const imagenBodyTemplate = (rowData) => {
        const id = rowData.url.split('/')[6]; 
        const img_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        
        return <img src={img_url} alt={rowData.name} width="64" />;
    };

    return (
        <div className="container mt-5">
            <Card title="Listado de pokemones de la PokeApi">
                <div className="mb-3">
                    <Button label="Recargar Datos" icon="pi pi-refresh" onClick={cargarData} />
                </div>

                <DataTable value={listaPokemons} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="name" header="Nombre" sortable style={{ width: '25%' }}></Column>
                    <Column header="Imagen" body={imagenBodyTemplate} style={{ width: '25%' }}></Column>
                    <Column field="url" header="URL Recurso" style={{ width: '50%' }}></Column>
                </DataTable>
            </Card>
        </div>
    );
};