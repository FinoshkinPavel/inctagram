import {FieldValues, useController, UseControllerProps} from 'react-hook-form'
import {Checkbox, CheckboxPropsType} from '@/src/components/ui/checkbox';


type Props<T extends FieldValues> = Omit<UseControllerProps<T>, 'rules' | 'defaultValues'> &
	Omit<CheckboxPropsType, 'onChange' | 'checked'>

export const ControlledCheckbox = <T extends FieldValues>({
																														control,
																														name,
																														shouldUnregister,
																														...rest
																													}: Props<T>) => {
	const {
		field: {value, onChange: onChange},
	} = useController({
		name,
		control,
		shouldUnregister,
	})
	const handleChange = onChange as (value: boolean) => void

	return <Checkbox checked={value} onChange={handleChange} {...rest} />
}