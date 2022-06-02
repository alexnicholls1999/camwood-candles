import React from 'react';
import MainLayout from '../Layouts/MainLayout';

function NotFound() {
  return (
    <MainLayout>
      <section class="hero page-section" id="top">
        <div class="hero-container row">
          <div class="hero-content-404 col-6 col-m-4">
            <div class="hero-content-container">
              <div class="hero-intro">
                <h1>404 Page Not Found</h1>
                <div class="p-1"></div>
                <p class="slogan">
                  The page you are looking for can not be found or does not
                  exist.
                </p>
              </div>
              <div class="p-1"></div>
              <button class="btn btn-primary" data-404btn>
                Go Back
              </button>
            </div>
          </div>
          <div class="hero-image-404 col-6 col-m-8"></div>
        </div>
      </section>
    </MainLayout>
  );
}

export default NotFound;
