import { Link, Navigate, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { IoBookOutline } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux";
import { createUserAsync, selectLoggedInuser } from "./authSlice";

export default function Signup() {

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInuser);
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  return (
    <>
      {/* {user && <Navigate to="/" replace={true}></Navigate>} */}
          <div className="Signup">
        <div>
          <a href="/signup">
            <IoBookOutline />
          </a>
          <h3>Sign up for account</h3>

        <div>
            <form
              onSubmit={handleSubmit((data) => {
                console.log("Data submitted:", data);
                dispatch(createUserAsync({ email: data.email, password: data.password }))
                navigate("/login")
              console.log(data)
            })}>
            <div>
              <label htmlFor="email"></label>
              <div>
                <input
                  id="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "email not valid",
                    },
                  })}
                  type="email"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="password"></label>
              </div>
              <div>
                <input
                  id="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "password is required",
                  })}
                  type="password"
                />
              </div>
              <div>
                <input
                  id="password"
                  placeholder="confirm-Password"
                  {...register("confirmPassword", {
                    required: "confirm password is required",
                    validate: (value,formValue) => value === formValue.password || 'password not matching'
                  })}
                  type="password"
                />
              </div>
            </div>

            <div>
              <button type="submit">Signup</button>
            </div>
                          
          </form>

          <p>
            already a member?
            <Link to="/login"> log in</Link>
          </p>
        </div>
      </div>
</div>
    </>
  )
}
