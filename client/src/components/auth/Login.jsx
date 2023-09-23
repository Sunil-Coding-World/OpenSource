import { Link, Navigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { IoBookOutline } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { checkUserAsync, selectLoggedInuser, selecterror } from "./authSlice"
import { useEffect } from "react"

export default function Login() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInuser);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <>
      {user && <Navigate to="/" replace={true}> </Navigate>}
      <div className="Login">
        <div>
          <a href="/login">
            <IoBookOutline />
          </a>
          <h3>Log in to your account</h3>

          <div>
            <form
              onSubmit={handleSubmit((data) => {
                dispatch(
                  checkUserAsync({ email: data.email, password: data.password })
                )
                console.log(data)
              })}
            >
              <div>
                <label htmlFor="email"></label>
                <div>
                  <input
                    id="email"
                    placeholder="Enter Your Email"
                    autoComplete="off"
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
                    autoComplete="off"
                    {...register("password", {
                      required: "password is required",
                    })}
                    type="password"
                  />
                </div>
                <div>
                  <Link to="/forgot-password">Forgot password?</Link>
                </div>
              </div>

              <div>
                <button type="submit">Log in</button>
              </div>
            </form>

            <p>
              Not a member?
              <Link to="/signup">Create an Account</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
