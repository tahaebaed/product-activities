import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import { IconButton } from '@mui/material'
import { DeleteForeverRounded } from '@mui/icons-material'
import { handleAddAmount, handleRemoveToCart } from '../store/products/actions'
import FooterDataBtn from '../components/FooterDataBtn'
import { handleAddToReview } from '../store/review/actions'

const ProductsCart = () => {
  const cartList = useSelector(state => state.products)
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Product', width: 130 },
    { field: 'price', headerName: 'Price', width: 70 },
    {
      field: 'amount',
      headerName: 'Amount',
      type: 'number',
      width: 90,
      editable: true,
      preProcessEditCellProps: params => {
        console.log(+params.props.value)
        if (params.props.value && params.props.value > 1) {
          dispatch(
            handleAddAmount({
              id: params.id,
              amount: Number(params.props.value),
            })
          )
          return params.props.value
        }
      },
    },
    {
      field: 'delete',
      headerName: 'Remove',
      sortable: false,
      renderCell: params => {
        const onClick = e => {
          e.stopPropagation() // don't select this row after clicking

          dispatch(handleRemoveToCart(params.id))
        }

        return (
          <IconButton color='error' onClick={onClick}>
            <DeleteForeverRounded />
          </IconButton>
        )
      },
    },
  ]
  return (
    <Box style={{ height: 300, width: '600px' }}>
      <DataGrid
        rows={cartList}
        editMode='row'
        pageSize={5}
        rowsPerPageOptions={[5]}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={newSelectionModel => {
          const reviewed = cartList.filter(
            item => newSelectionModel.includes(item.id) && item
          )
          dispatch(handleAddToReview(reviewed))
        }}
        components={{
          Footer: FooterDataBtn,
        }}
        componentsProps={{
          footer: { handleClose, handleOpen, open },
        }}
      />
    </Box>
  )
}

export default ProductsCart
