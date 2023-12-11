'use client'

import { useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select"

export type SelectValue = {
    label: string;
    value: string
}

interface SelectProps {
    value?: SelectValue;
    onChange: (value: SelectValue) => void;
    placeholder: string
    options: SelectValue[];
}

const UserSelect: React.FC<SelectProps> = ({
    value,
    options,
    placeholder,
    onChange
}) => {

    return (
        <>
            <Select
                placeholder={placeholder}
                isClearable
                isMulti
                options={options}
                onChange={(value) => onChange(value as any)}
                value={value}
                formatOptionLabel={(option: any) => (
                    <div className="
                    flex flex-row items-center gap-3">
                        <div>
                            {option.label}
                        </div>
                    </div>
                )}
                classNames={{
                    input: () => 'text-lg text-black ',
                    option: () => 'text-lg'
                }}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary: '#3b82f6',
                        primary25: '#93c5fd'
                    }
                })}
            />
        </>
    )
}

export default UserSelect;