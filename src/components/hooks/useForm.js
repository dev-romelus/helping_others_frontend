/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from 'react';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({});
    const [radio, setRadio] = useState(0);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const handleFieldChange = (e) => {
        e.persist();

        if (e.target.type === 'checkbox') {
            setValues((values) => ({ ...values, [e.target.name]: e.target.checked }));
        } else {
            setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
        }
    };

    const handleChange = (data) => {
        setValues((values) => ({ ...values, ...data }));
    };

    const handleSelectChange = ({ name, value }) => {
        setValues((values) => ({ ...values, [name]: value }));
    }

    const handleRadioChange = useCallback((e) => setRadio(Number(e.target.value)), []);

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validate(values));
        setSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            callback(values);
        }
    }, [errors]);

    return { values, errors, radio, handleFieldChange, handleChange, handleSubmit, handleRadioChange, setValues, handleSelectChange };
};

export default useForm;
