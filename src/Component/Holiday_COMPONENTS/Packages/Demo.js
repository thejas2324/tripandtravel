import React, { useState, useEffect } from 'react';

const TourBooking = () => {
  // Dummy data for departure cities
  const departureCities = ['New York', 'Los Angeles', 'Chicago', 'Miami'];

  // Dummy data for available dates
  const availableDates = ['2023-11-01', '2023-11-15', '2023-11-30'];

  // Component state
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [guestCount, setGuestCount] = useState(1);

  // Function to handle city selection
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  // Function to handle date selection
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  // Function to handle guest count change
  const handleGuestCountChange = (e) => {
    setGuestCount(parseInt(e.target.value, 10));
  };

  // Function to book the tour
  const bookTour = () => {
    if (selectedCity && selectedDate) {
      const bookingInfo = {
        city: selectedCity,
        date: selectedDate,
        guests: guestCount,
      };

      // Store the booking information in localStorage (for demonstration purposes)
      const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
      bookings.push(bookingInfo);
      localStorage.setItem('bookings', JSON.stringify(bookings));

      alert('Booking successful! Check your bookings in the "My Bookings" section.');
    } else {
      alert('Please select a city and date before booking.');
    }
  };

  return (
    <div>
      <h2>Book a Tour</h2>
      <div>
        <label htmlFor="city">Departure City:</label>
        <select id="city" value={selectedCity} onChange={handleCityChange}>
          <option value="">Select a city</option>
          {departureCities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="date">Select Date:</label>
        <select id="date" value={selectedDate} onChange={handleDateChange}>
          <option value="">Select a date</option>
          {availableDates.map((date, index) => (
            <option key={index} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          value={guestCount}
          onChange={handleGuestCountChange}
        />
      </div>

      <button onClick={bookTour}>Book Now</button>
    </div>
  );
};

export default TourBooking;
