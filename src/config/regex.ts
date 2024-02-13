export const Regexes = {
    number: /^-?\d*(\.\d+)?$/,
    integer: /^\d+$/,
    website:
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/,
    smsCode: /^\d{5}$/,
    email:
      /^(([^<>().,;:\s@"]+(\.[^<>().,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    stringWithOutSpace: /^\S*$/,
    password:
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])([a-zA-Z0-9(<!@#$%&*^`~'"|+=\\-\\\\_/?.,>)]){8,16}$/,
    phone:
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    codemeli: /^[0-9]{10}$/,
  };
