import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import Grid from '@mui/material/Grid';
import './Form.css'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useSelector } from 'react-redux'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Showdata from '../showdata/showdata';
import { Button } from '@mui/material';

function Form() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const nationality = useSelector((state) => state?.Nationality ? state?.Nationality : [])
  
    const onSubmit = (data) => {
    const existingData = JSON.parse(localStorage.getItem('myData')) || [];
    const newData = [...existingData, data];

    localStorage.setItem('myData', JSON.stringify(newData));

    reset();
  };

  return (
    <>
    <form className='custom' onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <FormControl className='titles' >
                <InputLabel id='demo-simple-select-helper-label'>Title *</InputLabel>
                <Select
                    {...register("title", 
                    { required: true })}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                >
                        <MenuItem value="">Select...</MenuItem>
                        <MenuItem value="Mr">Mr</MenuItem>
                        <MenuItem value="Ms">Ms</MenuItem>
                </Select>
                </FormControl>{errors.title && <h5 className='error'>This field is required</h5>}
            </Grid>
            <Grid item xs={4}>
                <FormControl className='Fristname' >
                    <TextField 
                    {...register('Fristname', 
                    { required: true })}
                    label='Frist Name.'
                    />
                </FormControl>{errors.Fristname && <h5 className='error'>This field is required</h5>}
            </Grid>
            <Grid item xs={4}>
            <FormControl className='Lastname' >
                <TextField 
                {...register('Lastname', 
                { required: true })}
                label='Last Name.'
                 />
                </FormControl>{errors.Lastname && <h5 className='error'>This field is required</h5>}
            </Grid>
            <Grid item xs={4}>
                <FormControl >
                    <TextField
                        {...register('bday', 
                        { required: true })}
                        id="date"
                        label="Birthday"
                        type="date"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </FormControl>{errors.bday && <h5 className='error'>This field is required</h5>}
            </Grid>
            <Grid item xs={4}>
            <FormControl className='nationlity' >
              <InputLabel id='demo-simple-select-helper-label'>Nationality</InputLabel>
              <Select
                {...register("nationality", 
                { required: true })}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
            {nationality.map((name) => (
                <MenuItem
                key={name.id}
                value={name.nationlity}
                >
                {name.nationlity}
                </MenuItem>
            ))}
              </Select>
            </FormControl>{errors.title && <h5 className='error'>This field is required</h5>}
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
            <TextField
            {...register('Citizen')}
                label={'Citizen ID'}
                req={false}
                helperText={''}
                inputProps={{
                placeholder: 'x-xxxx-xxxxx-xx-x',
                style: {
                    textAlign: 'center'
                }
                }}
            /> 
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={5}>
            <FormControl className='radio'>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="radio"
                >
                    <span style={{marginTop: '8px', marginLeft: '5px'}}>gender</span> &nbsp;&nbsp;
                    <FormControlLabel {...register('radio')} value="female" control={<Radio />} label="Female" />
                    <FormControlLabel {...register('radio')} value="male" control={<Radio />} label="Male" />
                    <FormControlLabel {...register('radio')} value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            </Grid>
            <Grid item xs={7}></Grid>
            <Grid item xs={4}>
            <FormControl className='country'>
              <InputLabel>country </InputLabel>
                <Select {...register("country ", 
                    { required: true })}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select">
                    <MenuItem value="+66">+66</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className='phone' >
                    <TextField
                        {...register('phone')}
                        label={'phone'}
                        req={false}
                        helperText={''}
                        inputProps={{
                        placeholder: 'x-xxxx-xxxxx-xx-x',
                        style: {
                            textAlign: 'center'
                        }
                    }}
                /> 
                </FormControl>
                
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={4}>
                <FormControl className='Passpor' >
                    <TextField 
                    {...register('Passpor')}
                    label='Passport No.'
                    />
                </FormControl>
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={4}>
                <FormControl className='Salary' >
                    <TextField 
                    type="number"
                    {...register('Salary', 
                    { required: true })}
                    label='Salary.'
                    />
                </FormControl>{errors.title && <h5 className='error'>This field is required</h5>}
            </Grid>
            <Grid item xs={12}>
                <Button type="submit">Submit</Button>
            </Grid>
        </Grid>
    </form>
    <Showdata/>
    </>
  );
}

export default Form