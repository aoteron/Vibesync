import { useForm } from 'react-hook-form';
import { InputField } from '../../../../styledComponents/inputField';
import './changeProfileForm.css'
import { toast } from 'sonner'
import { User } from '../../../../types/data';
import { UserService } from '../../../../services/UserService';
import { Dispatch, SetStateAction } from 'react';
import { token } from '../../../../services/TokenService';

type Props = {
  user: User
  setEmail: Dispatch<SetStateAction<string>>;
  setName: Dispatch<SetStateAction<string>>;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export const ChangeProfileForm = ({ user, setEmail, setName, setOpenModal }: Props) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (Object.keys(errors).length === 0) {
      const id = user.id;
      const userId = 'userId';
      data[userId] = id;
      console.log(data)
      const response = await UserService.patchUser(data, token);
      console.log(response)
      window.localStorage.setItem('userLogged', JSON.stringify(response.data))
      setEmail(data.email)
      setName(data.name)
      if (response) setOpenModal(false)
      reset()
      toast.success('Your profile information has been updated')
    }
  })


  return (
    <div className='changeProfileForm'>
      <h2>Edit Profile</h2>
      <form action="" onSubmit={onSubmit}>
        <InputField type='text' placeholder='name' {...register('name', { required: { value: true, message: "Name is required" } })} id='name'>
        </InputField>
        <InputField
          type='email'
          placeholder="name@hotmail.com"
          {...register('email', {
            required: {
              value: true,
              message: "Email is required"
            }, pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address"
            }
          })}
        ></InputField>

        {errors.email && typeof errors.email.message === 'string' && <span className='error-msg'>{errors.email.message}</span>}

        <select
          className='genderInput'
          id="gender"
          {...register('gender', {
            required: {
              value: true,
              message: "Gender is required"
            }
          })}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <div className='date-select'>
          <input
            type="number"
            id="year"
            min="1900"
            max="2100"
            {...register('year', {
              required: {
                value: true,
                message: 'Year is required'
              }
            })}
          />

          <select
            className='monthInput'
            id="month"
            {...register('month', {
              required: {
                value: true,
                message: 'Month is required'
              }
            })}
          >
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>

          <input
            type="number"
            id="day"
            min="1"
            max="31"
            {...register('day', {
              required: {
                value: true,
                message: 'Day is required'
              }
            })}
          />

          {errors.day && typeof errors.day.message === 'string' && <span className='error-msg'>Date and month are required</span>}

        </div>

        <select
          className='countryInput'
          id="country"
          {...register('country', {
            required: {
              value: true,
              message: 'Country is required'
            }
          })}
        >
          <option value="spain">Spain</option>
          <option value="austria">Austria</option>
          <option value="belgium">Belgium</option>
          <option value="bulgaria">Bulgaria</option>
          <option value="croatia">Croatia</option>
          <option value="cyprus">Cyprus</option>
          <option value="czech republic">Czech Republic</option>
          <option value="denmark">Denmark</option>
          <option value="estonia">Estonia</option>
          <option value="finland">Finland</option>
          <option value="france">France</option>
          <option value="germany">Germany</option>
          <option value="greece">Greece</option>
          <option value="hungary">Hungary</option>
          <option value="ireland">Ireland</option>
          <option value="italy">Italy</option>
        </select>

        <button className='signBtn' type='submit'>Submit</button>
      </form>
    </div>
  )
}

