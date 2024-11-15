'use client'
import Image from "next/image";
import  "./form.css";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  insurance: string;
  message: string;
}

export default function page() {

  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    insurance:'',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [touched, setTouched] = useState<Partial<{ [key in keyof FormData]: boolean }>>({});


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched(prevState => ({
      ...prevState,
      [name]: true
    }))
    setErrors(prevState => ({
      ...prevState,
      [name]: formData[name as keyof FormData] ? '' : 'Required'
    }));
};

  const validate = () => {
    let formErrors: Partial<FormData> = {};
    if (!formData.firstname) formErrors.firstname = 'Required';
    if (!formData.lastname) formErrors.lastname = 'Required';
    if (!formData.email) formErrors.email = 'Required';
    if (!formData.phone) formErrors.phone = 'Required';
    return formErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          insurance:'',
          message: ''
        });
      } else {
        alert(`Failed to send email: ${result.message}`);
        console.error(result.error);
      }
    } else {
      setErrors(formErrors);
    }
  };


  return (
    <div id="formPage">
      <div  className="phase-five" >
          <div className="phase-five-head">
            <h1>Get in touch!</h1>
            <div className="phase-five-line"></div>
          </div>
          <div className="mail-container">
            <div className="left">
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-para">
                  <h3>Ready to learn more about how Redtail Insurance Agency can help protect your business?</h3>
                  <p>Contact us today to schedule a consultation with one of our experienced agents. We're here to answer your questions and provide personalized insurance solutions that meet your needs.</p>
                </div>
                <div className="namesub">
                  <div className="name-contain">
                    <label htmlFor="fname">First name</label>
                    <div className={`name-container ${errors.firstname && touched.firstname ? 'error-container' : ''} ${errors.lastname && touched.lastname ? 'error-container' : ''} ${errors.phone && touched.phone ? 'error-container' : ''} ${errors.phone && touched.phone ? 'error-container' : ''}`}>
                      <div className="name" >
                        <Image src="form-user.svg" alt="user image" width={20} height={20} />
                        <div className="formline"></div>
                          <input
                            placeholder="First name"
                            name="firstname"
                            type="text"
                            value={formData.firstname}
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            className={errors.firstname && touched.firstname ? 'error' : ''}/>  
                      </div>
                    </div>
                    {errors.firstname && <span className="error">{errors.firstname}</span>}                   
                  </div>
                  <div className="name-contain">
                    <label htmlFor="fname">Last name</label>
                    <div className={`name-container ${errors.firstname && touched.firstname ? 'error-container' : ''} ${errors.lastname && touched.lastname ? 'error-container' : ''} ${errors.phone && touched.phone ? 'error-container' : ''} ${errors.phone && touched.phone ? 'error-container' : ''}`}>            <div className="name">
                      <Image src="form-user.svg" alt="user image" width={20} height={20} />
                      <div className="formline"></div>
                      <input
                        placeholder="Last name"
                        name="lastname"
                        type="text"
                        value={formData.lastname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.lastname && touched.lastname ? 'error' : ''}/>
                    </div>
                    </div>
                  {errors.lastname && <span className="error">{errors.lastname}</span>}
                  </div>
               </div>
        <div className="emailphone">
          <div className="name-contain">
            <label htmlFor="lname">E-name address</label>
            <div className={`name-container ${errors.firstname && touched.firstname ? 'error-container' : ''} ${errors.lastname && touched.lastname ? 'error-container' : ''} ${errors.phone && touched.phone ? 'error-container' : ''} ${errors.phone && touched.phone ? 'error-container' : ''}`}>            <div className="name">
              <Image src="form-mail.svg"alt="mail image" width={20} height={20} />
              <div className="formline"></div>
              <input
                placeholder="E-mail address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? 'error' : ''}/>
            </div>
            </div>
            {errors.email && <span className="error">{errors.email}</span>}

          </div>
          <div className="name-contain">
            <label htmlFor="fname">Phone number</label>
            <div className={`name-container ${errors.firstname && touched.firstname ? 'error-container' : ''} ${errors.lastname && touched.lastname ? 'error-container' : ''} ${errors.phone && touched.phone ? 'error-container' : ''} ${errors.phone && touched.phone ? 'error-container' : ''}`}>            <div className="name">
              <Image src="form-phone.svg" alt="phone image" width={20} height={20} />
              <div className="formline"></div>
              <input
                placeholder="phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phone && touched.phone ? 'error' : ''}/>
            </div>
            </div>
            {errors.phone && <span className="error">{errors.phone}</span>}

          </div>
        </div>
        <div className="message">
          <div className="messagebox">
            <label htmlFor="fname">Insurance coverage</label>
            <div className={`name-container ${errors.firstname && touched.firstname ? 'error-container' : ''} ${errors.lastname && touched.lastname ? 'error-container' : ''} ${errors.phone && touched.phone ? 'error-container' : ''} ${errors.phone && touched.phone ? 'error-container' : ''}`}>            <input
              // placeholder="Insurance coverage"
              name="insurance"
              value={formData.insurance}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
          </div>
          {/* {errors.insurance && <span className="error">{errors.insurance}</span>} */}

        </div>
        <div className="message">
          <div className="messagebox">
            <label htmlFor="fname">How can we help?</label>
            <div className={`name-container ${errors.firstname && touched.firstname ? 'error-container' : ''} ${errors.lastname && touched.lastname ? 'error-container' : ''} ${errors.phone && touched.phone ? 'error-container' : ''} ${errors.phone && touched.phone ? 'error-container' : ''}`}>            <input
              id="message"
              //placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
          </div>
          {/* {errors.message && <span className="error">{errors.message}</span>} */}

        </div>
        <button id="form-button" type="submit">Get A Quote</button>
      </form>
    </div> 
    <div className="right">
      <Image src="/form-right-img.svg" alt="persons" width={600} height={750} />

    </div>
    </div>
    </div>
    </div>
  );
}
