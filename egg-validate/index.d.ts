declare module 'egg' {

    interface Context {
        validate: (rule: IValidateRule, data?: any) => void;
    }
}

declare interface IValidateRule {
    [key: string]: 'int' | 'integer' | 'number' | 'date' | 'dateTime' | 'id' | 'boolean' | 'bool' | 'string' | 'email' | 'password' | 'object' | 'array' | any[] | RegExp | {
        type: 'int' | 'integer' | 'number' | 'array';
        required: boolean;
        min?: number;
        max?: number;
    } | {
        type: 'date' | 'dateTime' | 'datetime' | 'id' | 'boolean' | 'bool';
        required: boolean;
    } | {
        type: 'string' | 'email' | 'password';
        required: boolean;
        allowEmpty?: boolean;
        format?: RegExp;
        min?: number;
        max?: number;
    } | {
        type: 'object';
        required: boolean;
        rule?: IValidateRule;
    } | {
        type: 'enum';
        required: boolean;
        values: any[];
    }
}