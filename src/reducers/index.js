import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";
import { stat } from "fs";

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const reducer = (state = initialState,action) => {
    switch(action.type){
        case(ADD_FEATURE):
            return ({
                ...state, 
                car: {
                    ...state.car, 
                    features: [...state.car.features, 
                        (state.additionalFeatures.filter(feature => {
                            if(feature.id === action.payload){
                               return feature
                            }
                        }))[0]     
                    ]
                },
                additionalFeatures: state.additionalFeatures.filter(feature => action.payload !== feature.id),
                additionalPrice: state.additionalPrice + (state.additionalFeatures.filter(feature => {
                    if(feature.id === action.payload){
                       return feature.price
                    }
                }))[0].price
            })
        case(REMOVE_FEATURE):
            return({
                ...state,
                car:{
                ...state.car,
                features: state.car.features.filter(feature => 
                    
                        feature.id !== action.payload
                    )
                },
                additionalFeatures:[...state.additionalFeatures, 
                    (state.car.features.filter(feature => feature.id===action.payload))[0]
                ],
                additionalPrice: state.additionalPrice - (state.car.features.filter(feature => {
                    if(feature.id === action.payload){
                       return feature.price
                    }
                }))[0].price
            })
        default:
            return state;
    }
}
