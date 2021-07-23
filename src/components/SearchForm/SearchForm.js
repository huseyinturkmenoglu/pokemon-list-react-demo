import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';


export default function SearchForm({ search, onSearchChange, placeholderText }) {
    return (
        <>
            <InputGroup size="lg" className="sticky-header">
                <FormControl 
                name="search"
                placeholder={placeholderText}
                value={search}
                onChange={onSearchChange}
                size="sm"
                />
            </InputGroup>
        </>
    );
}
