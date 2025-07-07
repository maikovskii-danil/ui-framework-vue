declare module '@maikovskii-danil/ui-framework-vue' {
  import type { DefineComponent } from 'vue';

  export const AppAlert: DefineComponent<
    {
      styleStrategy?: 'primary' | 'danger';
      title?: string;
      text?: string;
      visible?: boolean;
    },
    {},
    any,
    {},
    {},
    {},
    {
      close: () => void;
    }
  >;

  export const AppInput: DefineComponent<
    {
      modelValue?: string;
      placeholder?: string;
      type?: string;
      autocomplete?: string;
      withError?: boolean;
      error?: string;
    },
    {},
    {},
    {},
    {},
    {},
    {
      'focus': () => void;
      'onUpdate:modelValue'?: (value: string) => void;
    }
  >;

  export const AppButton: DefineComponent<
    {
      type?: 'button' | 'submit' | 'reset';
      class?: string;
      styleStrategy?: 'primary' | 'danger';
    },
    {},
    {},
    {},
    {},
    {},
    {
      click: (event: MouseEvent) => void;
    }
  >;

  export const AppModal: DefineComponent<
    {
      visible?: boolean;
    },
    {},
    any,
    {},
    {},
    {},
    {
      close: () => void;
    }
  >;

  export const AppSelect: DefineComponent<{
    'modelValue'?: string;
    'options': Array<{ id: string; displayName: string }>;
    'onUpdate:modelValue'?: (value: string) => void;
  }>;

  export interface IHeaderCell {
    id: string;
    displayName: string;
    twStyle: string;
  }

  export interface ICell {
    value: string;
    twStyle: string;
  }

  export interface IRow {
    id: string;
    cells: ICell[];
  }

  export interface ITable {
    headers: IHeaderCell[];
    rows: IRow[];
  }

  export interface ITableProps {
    headers: IHeaderCell[];
    rows: Omit<IRow, 'id'>[];
  }

  export const AppTable: DefineComponent<{
    table?: ITable | ITableProps;
    emptyText?: string;
    emptyHeightInRows?: number;
    initialRowHeight?: number;
  }>;
}
