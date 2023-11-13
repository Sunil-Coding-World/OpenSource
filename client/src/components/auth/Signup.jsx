import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoBookOutline } from "react-icons/io5";
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
    watch,
  } = useForm();

  const password = watch("password", "");

  const onSubmit = async (data) => {
    try {
      console.log("Data submitted:", data);
      await dispatch(createUserAsync({ email: data.email, password: data.password }));
      navigate("/login");
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Display an error message to the user
    }
  };

  return (
    <>
      <div className="Signup">
        <div>
          <Link to="/signup">
            <IoBookOutline />
          </Link>
          <h3>Sign up for an account</h3>

          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email"></label>
                <div>
                  <input
                    id="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                        message: "Email not valid",
                      },
                    })}
                    type="email"
                    className={errors.email ? "error-input" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="password"></label>
                <div>
                  <input
                    id="password"
                    placeholder="Password (min. 6 characters)"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    type="password"
                    className={errors.password ? "error-input" : ""}
                  />
                </div>
                <div>
                  <input
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: "Confirm password is required",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    type="password"
                    className={errors.confirmPassword ? "error-input" : ""}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <button type="submit">Signup</button>
              </div>
            </form>

            <p>
              Already a member? <Link to="/login">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
