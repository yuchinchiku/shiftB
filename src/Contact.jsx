import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from './cssModule/contact.module.css'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const defaultValues = {
    name: '',
    email: '',
    message: ''
  }

  const { register, handleSubmit, formState: {errors}, reset } = useForm({
    defaultValues
  });

  const handleReset = () => {
    reset();
  }

  const [isSubmit, setIsSubmit] = useState(false);

  const onError = err => console.log(err);
  const onSubmit = async(data) => {
    setIsSubmit(true);
    try{
      const reponse = await fetch('https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await reponse.json();
      console.log('送信成功！', result);
      alert('送信しました！');
      reset();
    } catch (error) {
      console.log('送信エラー', error);
      alert('送信エラー');
    } finally {
      setIsSubmit(false);
    }
  }

  return(
    <div>
      <h1 className={styles.title}>問合わせフォーム</h1>
      <form name="contactForm" onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div className={styles.form__item}>
          <label htmlFor="name">お名前</label>
          <div className={styles.form__input}>
            <input id="name" name="name" type="text"
              {...register('name',{
                required: '名前は必須入力です。',
                maxLength: {
                  value: 30,
                  message: '名前は30文字以内にしてください。'
                }
              })}
              onChange={handleForm}
              disabled={isSubmit}
            />
            <p className={styles.error}>{errors.name?.message}</p>
          </div>
        </div>

        <div className={styles.form__item}>
          <label htmlFor="email">メールアドレス</label>
          <div className={styles.form__input}>
            <input id="email" name="email" type="text"
              {...register('email',{
                required: 'メールアドレスは必須入力です。',
                pattern: {
                  value: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
                  message: 'メールアドレスの形式が不正です。'
                }
              })}
              onChange={handleForm}
              disabled={isSubmit}
            />
            <p className={styles.error}>{errors.email?.message}</p>
          </div>
        </div>
        <div className={styles.form__item}>
          <label htmlFor="message">本文</label>
          <div className={styles.form__input}>
            <textarea id="message" name="message" type="text" rows="8"
              {...register('message',{
                required: '本文は必須入力です。',
                maxLength: {
                  value: 500,
                  message: '本文は500文字以内にしてください。'
                }
              })}
              onChange={handleForm}
              disabled={isSubmit}
            ></textarea>
            <p className={styles.error}>{errors.message?.message}</p>
          </div>
        </div>
        <div className={styles.form__btn}>
          <button className={styles.submit} type="submit disabled={isSubmit}">送信</button>
          <button className={styles.clear} type="button" onClick={handleReset} disabled={isSubmit}>クリア</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;