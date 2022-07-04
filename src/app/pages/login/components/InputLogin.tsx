import React from "react";

export interface IInputLoginProps {
    label: string;
    type?: string;
    value: string;
    onPressEnter?: ( ) => void;
    onChange: (newValue: string) => void;
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props: IInputLoginProps, ref) => {

    return(
        <label>
          <span>{props.label}</span>
            <input 
                ref={ref}
                value={props.value} 
                type={props.type} 
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && props.onPressEnter?.()}
            />
        </label>
    )
})