import React from 'react';
import { FaCheck } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { LiaTasksSolid } from "react-icons/lia";
import { IoIosNotificationsOutline } from "react-icons/io";

const featuresData = [
  {
    icon: <FaCheck className='mb-3 fs-1' />,
    title: 'Task Creation',
    text: 'Add, edit and delete',
  },
  {
    icon: <LiaTasksSolid className='mb-3 fs-1' />,
    title: 'Task Overview',
    text: 'View and organize task by status',
  },
  {
    icon: <IoMdLogIn className='mb-3 fs-1' />,
    title: 'Secure Login',
    text: 'Login and register with email',
  },
  {
    icon: <IoIosNotificationsOutline className='mb-3 fs-1' />,
    title: 'Smart Notification',
    text: 'Get timely alerts',
  },
];

const Features = () => {
  return (
    <div className="Features">
      <section className="py-5 text-center bg-light">
        <div className="container">
          <h2 className="mb-3 fw-bold">Everything You Need to Stay on Track</h2>
          <p className="mb-5">Zeno gives you the tools to plan, manage, and complete tasks efficiently.</p>

          <div className="row g-4 justify-content-center">
            {featuresData.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-6">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column align-items-center">
                    {feature.icon}
                    <h5 className="card-title mb-3">{feature.title}</h5>
                    <p className="card-text">{feature.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 text-center bg-dark text-white">
        <div className="container">
          <h2 className="fw-bold mb-4">Zeno</h2>
          <p className="lead mb-5">
            Zeno helps team stay organized and focused by combining task management and real-time collaboration in one simple platform. It makes prioritizing work, tracking progress, and meeting deadlines easy, so your team can achieve more together without the chaos.
          </p>

          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <div className="p-3 px-4 border rounded-3 bg-secondary bg-opacity-25">
              <div className="h5 mb-1">2024</div>
              <div className="small">Zeno Founded</div>
            </div>

            <div className="p-3 px-4 border rounded-3 bg-secondary bg-opacity-25">
              <div className="h5 mb-1">10K+</div>
              <div className="small">Active User</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
