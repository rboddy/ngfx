<div class="login">
  <div class="card">
    <div class="card-body login-form">
      <h5 class="card-title">Login</h5>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <p class="float-end mt-3">
        Not a user? <a href="/signup" class="card-link">Sign Up</a>
      </p>
    </div>
  </div>
</div>

<style>
  .card {
    width: 50%;
    margin: 0 auto;
  }
  .login {
    margin-top: 50px;
  }
  .login-form {
    width: 60%;
    margin: 0 auto;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .login-form {
      width: 90%;
    }
    .card {
      width: 90%;
    }
  }
</style>
