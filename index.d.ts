import type { ICell, IHeaderCell, IRow, ITable } from './typesDir/table';
import type { DefineComponent } from 'vue';
import type { IDropdownOption } from './typesDir/dropdown';

declare module '@maikovskii-danil/ui-framework-vue' {
  export const AppAlert: DefineComponent<
    {
      styleStrategy?: 'primary' | 'danger';
      title?: string;
      text?: string;
      visible?: boolean;
    },
    any,
    any,
    any,
    any,
    any,
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
    any,
    any,
    any,
    any,
    any,
    {
      'focus'?: () => void;
      'update:modelValue'?: (value: string) => void;
    }
  >;

  export const AppButton: DefineComponent<
    {
      type?: 'button' | 'submit' | 'reset';
      class?: string;
      styleStrategy?: 'primary' | 'danger' | 'neutral';
    },
    any,
    any,
    any,
    any,
    any,
    {
      click: (event: MouseEvent) => void;
    }
  >;

  export const AppModal: DefineComponent<
    {
      visible?: boolean;
    },
    any,
    any,
    any,
    any,
    any,
    {
      close: () => void;
    }
  >;

  export const AppSelect: DefineComponent<{
    'modelValue'?: string;
    'options': Array<{ id: string; displayName: string }>;
    },
    any,
    any,
    any,
    any,
    any,
    {
      'update:modelValue': (value: string) => void;
    }
  >;

  export const AppTable: DefineComponent<
    {
      table?: ITable;
      emptyText?: string;
      emptyHeightInRows?: number;
      initialRowHeight?: number;
      debugComputedTable?: boolean;
    }
  >;

  export const AppDropdown: DefineComponent<
    {
      modelValue: string | null;
      options: IDropdownOption[];
      zIndex?: number;
    },
    any,
    any,
    any,
    any,
    any,
    {
      'update:modelValue': (value: string) => void;
    }
  >;

  export { ITable, IHeaderCell, ICell, IRow, IDropdownOption };
}