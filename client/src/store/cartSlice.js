import { createSlice } from "@reduxjs/toolkit";

const init = {
    items:[],
    totalPrice:0,
    config:{
        _id:0,
        img_url:'',
        name:'',
        price:0,
        qt:0
    }

}

const cartSlice = createSlice({
    name:'cartSlice',
    initialState:init,
    reducers:{
        addToCart:(state ,action)=>{
            const {_id,name,img_url,price} = action.payload;
            
            state.config = {
                _id,
                img_url:img_url,
                name:name,
                price:+price,
                qt:1
            };
            let arr = state.items;
            let trv = arr.find(item => item._id === _id)
            if (trv){
                let index = arr.indexOf(trv);
                state.items[index].qt+=1;
                state.items[index].price*=2;
                
            }else{
                state.items = [...state.items , state.config];
                
            }
            let pr = 0
            state.items.map(item =>pr+= item.price)
            state.totalPrice = pr
            

        },
        removeItem:(state,action)=>{
            const item = action.payload;
            let arr = state.items
            arr.splice(arr.indexOf(item),1)
            state.items = [...arr]
        }
    }
})

export default cartSlice;
export const {addToCart ,removeItem} = cartSlice.actions



