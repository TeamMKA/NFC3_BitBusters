

const Contact = () => {
  return (<div className="contact">
    <main>
      <h1> Contact Us</h1>

      <form>
        <div>
          <label>Name: </label>
          <input type="text" required placeholder="Abc" />
        </div>

        <div>
          <label>Email: </label>
          <input type="email" required placeholder="Abc@xyz.com" />
        </div>

        <div>
          <label>Message: </label>
          <input type="text" placeholder="Tell us your query" />
        </div>

        <button type="submit">SUBMIT</button>
      </form>
    </main>
  </div>
);
  
}

export default Contact