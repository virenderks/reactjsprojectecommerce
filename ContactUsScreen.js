const ContactUsScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      const formData = {
        name,
        email,
        phone,
      };
      try {
        const response = await fetch('https://your-firebase-endpoint', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        // Handle success or error response here
      } catch (error) {
        // Handle error here
      }
    };
  
    return (
      <div>
        <h2>Contact Us</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  