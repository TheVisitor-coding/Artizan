import { Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import ModifyButton from '../../forms/buttons/ModifyButton'
import DeleteButton from '../../forms/buttons/DeleteButton'
import { useDeleteProduct } from '../../../hooks/Product'

function ListArtisan ({ isLoading, response, jwt }) {
  const { deleteProduct, deleteIsLoading, deleteResponse } = useDeleteProduct()

  if (deleteResponse) {
    window.location.reload()
  }

  return (
    <>
      {
        isLoading
          ? (<Spinner />)
          : (
            <Table aria-label='Table'>
              <TableHeader>
                <TableColumn>Nom Produit</TableColumn>
                <TableColumn>Description</TableColumn>
                <TableColumn>Prix</TableColumn>
                <TableColumn className='flex justify-end items-center pr-12'>Actions</TableColumn>
              </TableHeader>
              {
          response
            ? (
              <TableBody>
                {
          response.artisan && response.artisan.products.map((product, key) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell className=' max-w-52'>{product.description}</TableCell>
              <TableCell>{product.price} €</TableCell>
              <TableCell className='flex flex-row justify-end gap-4'>
                {
                  response.role.name === 'Artisan'
                    ? (
                      <>
                        <ModifyButton product={product} />
                        <DeleteButton id={product.id} token={jwt} deleteFunction={deleteProduct} deleteIsLoading={deleteIsLoading} />
                      </>
                      )
                    : (
                      <></>
                      )
                }

              </TableCell>
            </TableRow>
          ))
         }
              </TableBody>
              )
            : (
              <TableBody emptyContent='Aucun Produit Actif'>{[]}</TableBody>
              )
        }
            </Table>
            )
     }

    </>
  )
}

export default ListArtisan
