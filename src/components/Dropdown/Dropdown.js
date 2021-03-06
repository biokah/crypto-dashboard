import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({options, label}) {

    const classes = useStyles();
    const [option, setOption] = React.useState('');

    const handleChange = (event) => {
        setOption(event.target.value);
    };

    return (
        <div>
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>{label}</InputLabel>
            <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={option}
            onChange={handleChange}
            label={label}
            >
            {options.map(item => {
                return <MenuItem value={item.tag}>{item.name}</MenuItem>
            })}
            </Select>
        </FormControl>
        </div>
    );
}