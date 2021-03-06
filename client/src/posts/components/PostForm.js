import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import { getPost } from "../posts.actions";

import Input from "../../shared/Input";
import Button from "../../shared/Button";
import Error from "../../shared/Error";
import Textarea from "../../shared/Textarea";
import FileInput from "../../shared/FileInput";
import FormContainer from "../../layout/FormContainer";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required field")
    .min(10, "Title should have at least 10 characters"),
  body: Yup.string()
    .required("Content is required field")
    .min(150, "Content should have at least 150 characters")
});

const PostForm = ({ onSubmit, error, editMode, post, ...props }) => {
  const [changeImage, setChangeImage] = useState(editMode ? false : true);
  const [initialValues, setInitialValues] = useState({
    title: "",
    body: "",
    image: null
  });
  const dispatch = useDispatch();
  let p = useSelector(state => state.posts.post);

  useEffect(() => {
    if (!post && editMode) {
      dispatch(getPost(window.document.location.pathname.split("/")[2]));
    }
    if (p && editMode) {
      const inv = { title: p.title, body: p.body, image: null };
      setInitialValues({ ...inv });
    }
  }, [p]);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          if (!editMode) {
            onSubmit(values);
            setSubmitting(false);
            resetForm();
          } else {
            const id = post ? post._id : p._id;
            onSubmit(id, values);
            setSubmitting(false);
          }
        }}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, setFieldValue }) => (
          <FormContainer>
            {error && <Error error={error} />}
            <Field name="title" component={Input} label="Title" />
            <Field name="body" component={Textarea} label="Content" rows={8} />
            {!changeImage && editMode && (
              <Button
                color="yellow"
                classes="my-2"
                block={false}
                onClick={() => setChangeImage(true)}
              >
                Change image
              </Button>
            )}
            {changeImage && (
              <FileInput
                setFieldValue={setFieldValue}
                name="image"
                allowedTypes={["image/jpg", "image/jpeg", "image/png"]}
                allowedSize={5 * 1024 * 1024}
              />
            )}
            <Button color="green" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </FormContainer>
        )}
      </Formik>
    </>
  );
};

export default PostForm;
