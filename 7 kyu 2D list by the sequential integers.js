function make2dList(head,row,col){
    return [...Array(row)].map((x,i)=>[...Array(col)].map((y,j)=>head+col*i+j))
}