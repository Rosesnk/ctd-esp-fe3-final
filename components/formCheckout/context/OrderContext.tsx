import { createContext, FC, useReducer, useMemo, Dispatch } from "react";
import { PropsWithChildren } from "react";
import { PersonalDataForm, ShipmentAddressForm, PaymentDataForm } from "../forms";
import { ShipmentPersonalData } from "../forms/customer.types";


export type Order = {
  customer: ShipmentPersonalData
  card: PaymentDataForm;
};

export interface OrderState {
  order: Order;
}

export interface OrderContextState {
  state: { order: Order };
  dispatch: Dispatch<OrderActionType>;
}

export const OrderContext =
  createContext<OrderContextState | undefined>(undefined);

type OrderSetCustomerType = {
  type: "SET_CUSTOMER";
  payload: PersonalDataForm;
};

type OrderSetCardType = {
  type: "SET_CARD";
  payload: PaymentDataForm;
};

type OrderSetAddressType = {
  type: "SET_ADDRESS";
  payload: ShipmentAddressForm;
};

type OrderActionType =
  | OrderSetCustomerType
  | OrderSetCardType
  | OrderSetAddressType;

const reducer = (state: OrderState, action: OrderActionType) => {
  switch (action.type) {
    case "SET_CUSTOMER":
      return {
        ...state,
        order: {
          ...state.order,
          customer: action.payload,
        },
      };
    case "SET_CARD":
      return {
        ...state,
        order: {
          ...state.order,
          card: action.payload,
        },
      };
    case "SET_ADDRESS":
      return {
        ...state,
        order: {
          ...state.order,
          customer:{ ...state.order.customer, address: action.payload},
        },
      };
    default:
      return state;
  }
};

const initialState: OrderState = {
  order: {
    customer: {} as ShipmentPersonalData,
    card: {} as PaymentDataForm,
  },
};

export const OrderProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer<any>(reducer, initialState);

  const value = useMemo<any>(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
