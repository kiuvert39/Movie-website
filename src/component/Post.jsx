import React from "react";
import "./player.css";

const Post = () => {
  return (
    <section class="h-100 w-100 gradient-form main post">
      <div class="container py-5 h-100 pl-4">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10 ">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
                    <form method="Post">
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example11"
                          class="form-control"
                          placeholder="Movie Name"
                        />
                        <label class="form-label" for="form2Example11">
                          Movie Name
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example22"
                          class="form-control"
                          placeholder="Duration"
                        />
                        <label class="form-label" for="form2Example22">
                          Duration
                        </label>
                      </div>
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example22"
                          class="form-control"
                          placeholder="Image Url"
                        />
                        <label class="form-label" for="form2Example22">
                          Image Url
                        </label>
                      </div>

                      <div class="d-flex align-items-center justify-content-center pb-4">
                        <button type="button" class="btn btn-outline-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
