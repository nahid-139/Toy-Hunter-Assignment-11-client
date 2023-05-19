import React from 'react';
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer aria-label="Site Footer" className="bg-gray-100 dark:bg-gray-900">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-600 dark:text-teal-300">
      <img src="https://i.ibb.co/zmyP8gv/HD-wallpaper-batman-logo-batman-superheroes-logo-modified.png"className='w-20' alt="" />
    </div>
      <h1 className='text-center font-bold text-2xl text-white mt-2'>Toy Hunter</h1>
    <p
      className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
      consequuntur amet culpa cum itaque neque.
    </p>

    <nav aria-label="Footer Nav" className="mt-12">
      <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="/"
          >
            About
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="/"
          >
            Careers
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="/"
          >
            History
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="/"
          >
            Services
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="/"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="/"
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>

    <ul className="mt-12 flex justify-center gap-6 md:gap-8 text-white">
      <li>
        <FaFacebook></FaFacebook>
      </li>

      <li>
        <FaInstagram></FaInstagram>
      </li>

      <li>
        <FaTwitter></FaTwitter>
      </li>

      <li>
        <FaGithub></FaGithub>
      </li>

      <li>
        <FaDribbble></FaDribbble>
      </li>
    </ul>
  </div>
</footer>
    );
};

export default Footer;