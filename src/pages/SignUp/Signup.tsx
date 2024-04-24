import { useState } from "react";
import { Link } from "react-router-dom";
import './Signup.css'
import logo from '/src/assets/logo.png'
import { Toaster } from 'react-hot-toast';
import { UserService } from "../../services/UserService";

export const Signup: any = () => {
  // const userQuery = useQuery({
  //   queryKey: ["user"],
  //   queryFn: async () => await fetchUsers(),
  // });

  // const setNewUser = async () => {
  //   const id = Math.random().toString(36).substr(2, 9);

  //   const data = {
  //     first_name: name,
  //     password: password,
  //     last_name: lastName,
  //     email: username,
  //     profilePicture: "/src/assets/profile_pic.png",
  //     isLoggedin: false,
  //     id: id
  //   };

  //   try {
  //     const response = await axios.post('http://localhost:3000/user', data);
  //     setName('');
  //     setLastName('');
  //     setUsername('');
  //     setPassword('');
  //   } catch (error) {
  //     console.error('Error al guardar datos', error)
  //   }
  // }

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault()

    const user = {
      email: username,
      name,
      password: password,
      gender,
      image,
      birthdate,
      country
    };
    const response = artist ?
      await UserService.postUser(user)
      : await UserService.postUser(user)

    console.log('response', response)
    if (response) {
      window.localStorage.setItem('userLogged', JSON.stringify(response.user))
      window.localStorage.setItem('token', JSON.stringify(response.token))
      setTimeout(() => {

        window.location.reload()
      }, 200)
      // toast.success('Successfully signed up!')
    }
  }


  // if (username.trim() === "" || password.trim() === "" || name.trim() === "" || lastName.trim() === "") {
  //   toast.error("Please check if you gave us all the info!")
  // }

  // if (username) {
  //   const user = userQuery.data.find(
  //     (user: { email: string }) => {
  //       return user.email === username;
  //     }
  //   );
  //   if (user !== undefined) {
  //     toast.error("This user already exists!")
  //     triggerRefetch();
  //   } else if (nameError === "" && lastNameError === "" && passwordError === "" && emailError === "" && password !== "") {
  //     toast.success('Successfully signed up!')
  //   }
  // }

  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [artist, setArtist] = useState(false);
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [birthdate, setBirthdate] = useState("");

  console.log('birthdate', birthdate)
  const validateEmail = (input: string) => {
    if (input.trim() === '') {
      setEmailError('Email is required')
    } else {
      setEmailError('')
    }
  }

  const validateName = (input: string) => {
    if (input.trim() === '') {
      setNameError('Name is required')
    } else {
      setNameError('')
    }
  }

  const validateLastName = (input: string) => {
    if (input.trim() === '') {
      setLastNameError('Last name is required')
    } else {
      setLastNameError('')
    }
  }

  const validatePassword = (input: string) => {
    if (input.length < 6) {
      setPasswordError('Password must be at least 6 characters')
    } else if (!/[A-Z]/.test(input)) {
      setPasswordError('Password must contain at least one uppercase letter')
    } else if (!/[\W_]/.test(input)) {
      setPasswordError('Password must contain at least one special character')
    } else {
      setPasswordError('')
    }
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value)
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleArtistChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArtist(event.target.checked);
  }

  const handleImageChange = (event: any) => {
    setImage(event.target.value);
  }

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  }

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  }

  const handleBirthdateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthdate(event.target.value);
  }

  const handleArtistInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleArtistChange(event);
  }

  const handleImageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleImageChange(event);
  }

  const handleGenderInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleGenderChange(event);
  }

  const handleCountryInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleCountryChange(event);
  }

  const handleBirthdateInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleBirthdateChange(event);
  }



  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleNameChange(event)
    validateName(event.target.value)
  }

  const handleLastNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleLastNameChange(event)
    validateLastName(event.target.value)
  }

  const handleUsernameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleUsernameChange(event)
    validateEmail(event.target.value)
  }

  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handlePasswordChange(event);
    validatePassword(event.target.value);
  };



  return (
    <div className="signup--container">
      <img className="logo" src={logo} />
      <h2 className="signup--header">Signup to start listening to content</h2>
      <Toaster />
      <form onSubmit={handleSignup} className="signup-form">
        <input
          className="signup-input"
          type="text"
          value={name}
          id="name"
          placeholder="Name"
          onChange={handleNameInputChange}
        />
        <input
          className="signup-input"
          type="text"
          value={lastName}
          id="lastname"
          placeholder="Last name"
          onChange={handleLastNameInputChange}
        />
        <input
          className="signup-input"
          type="email"
          value={username}
          id="email"
          placeholder="Email"
          onChange={handleUsernameInputChange}
        />
        <input
          className="signup-input"
          type="password"
          value={password}
          id="password"
          placeholder="Password"
          onChange={handlePasswordInputChange}
        />
        <label htmlFor="image">Image</label>
        <input type="file" onChange={handleImageInputChange} />
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" onChange={handleGenderInputChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="country">Country</label>
        <input type="text" onChange={handleCountryInputChange} />
        <label htmlFor="birthdate">Birthdate</label>
        <input type="date" onChange={handleBirthdateInputChange} />
        <label htmlFor="artist">Artist</label>
        <input type="checkbox" onChange={handleArtistInputChange} id="artist" />


        {passwordError && <div className="error-password">{passwordError}</div>}
        {emailError && <div className="error-email">{emailError}</div>}
        {nameError && <div className="error-name">{nameError}</div>}
        {lastNameError && <div className="error-lastname">{lastNameError}</div>}

        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>
      <Link to="/login">Already have an account?Login</Link>
    </div>
  )
}
