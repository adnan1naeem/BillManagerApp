import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Image from './Image.component';
import { withKnobs, text,} from '@storybook/addon-knobs/react';
import {View} from 'react-native';


storiesOf('Image', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .addDecorator(withKnobs )

  .add('Image story', () => (
  <Image  source="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQERIQDxAODhAVFhUVEBAQDxARDw8PFREXGBYVFRUYHSggGholGxMVIjEhJSotLi4uFyAzODMtOCgtLisBCgoKDg0OGhAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYEBQcDAv/EAEMQAAICAAIGBAoIBAUFAAAAAAABAgMEEQUGITFBURIiYXETMlJTcoGRobHBBxYjM0Ji0dIUk6KyFUSC4fA0Q3ODkv/EABsBAQACAwEBAAAAAAAAAAAAAAAEBQECAwYH/8QAMhEBAAIBAgUBBQgCAwEAAAAAAAECAwQRBRIhMVFBExQicaEVMlJhgZGx0ULBBjPwI//aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGYDMAmJBsQT0MwGYEgAAAAAAAAAAAAAAAAAAAAAAAEdIHzYWkdL0YddK6yNfJPbKXdFbWaWyVr3l2xYMmWdqRuqekPpCrTf8PTOz81jUIv1LN/AjW1kdoW2HgWSeuS235NHidesbPxXVUvy1pv2yzOE6q8rCnBdPXvvLAnrTjn/mbF3dFfI094yT6pMcM00f4QR1oxy/zNvr6L+KHt8kepPDNL+CGZh9d8dHfZCxcp1x+McjaNVeHC/BtNbtEx+rc4H6Q9yvoa5yqln/TL9TvXWeYQMvArd8dv3WzResGGxP3NqlLyH1Zr/SyTTLW3aVTn0mbB9+u0efRs+kdEZIAAAAAAAAAAAAAAAAAAARmB44rF11Rc7JxhBb5SeSRi1orG8tqUtedqxvLnuntepzzhhM64+dkl05ein4vr29xAy6qZ6Ueh0nBYj4s3WfCnXWym3KcpTk98pNyb9bIkzM919THFI2p0fBhuAAAAABKk0002mtzTyafYxuxNYnpPX5rXoHXa6lqGI6V9flbPCxXf+L17e0lYtVavS3VSazg9MnxYuk+HRtHaQqvrVlU1OL4rPNPk1vT7CwraLRvDzeXDfFbkvHVlmzmAAAAAAAAAAAAAAAAIYGFpbSdeGrlbbLKK3L8UpcIxXFs0veKRvLrgwXzX5KR1cm1g09djJ5zfRrT6lSfViub5y7Sry5bXn8nsdFoaaasTXrPru1RyTkAAAAAAAAAJA3ups8V/EJYXjl4VP7roZ7XP5cTvp5tzfCq+K10/st8vf08uuw3Fq8e+gAAAAAAAAAAAAAAAHhjMRGqErLGowis5N8EjE2isby2pSb2ite8uP6x6cnjLXN5xrWaqh5Meb7XxKnLlnJb8ntNDoo01OWe89d2pOScAAAGRhMHbc8qq7LX+SLeT7XwNq0tbs45c+PF1vbZuKdTcfL/sqPpWQXzOvu2RCtxfTR/l9E26l4+O3wUZejZBv4mfdcjEcY00+v0anHaMvo++psrXOUX0fbuOVsdq94TMWrxZfu23YhokbgGdofRVuKsVVS275Sfiwj5TOmLHN52hF1eqpp6c1/0/N1zQeh6sJWq6lm985vxpy5v9C0x44pGzxmp1OTUX5rtkjo4JAAAAAAAAAAAAAAA+Zgc5+kTTXTn/AAtb6scpW5fis4R9Wx9+XIr9Vl3nkh6Pg2k2j21u/opZDehQAA9sJhp2zVdcXOct0VvM1pNp2hzy5qY672naHQtA6i1wSnimrp+bX3Ue/jL4Fhi0tY62eY1nGMmXeuLpHlcMPTGEVGEYxityikku5IlRGynm026zO71MsAHzZFNNNZp709zBvt1VTTupVF2c6csPb+VfZyfbHh3r3kbJpq26x3Wmk4plw9L/ABQo9GreJniP4boOM1tlJ7a4w8vPiuRCjDeb8vr5egvxLDXD7SJ6ennfw6loPQ9WDrVda7ZzfjTlzZZ48cUjaHktRqb5781mzN3AAAAAAAAAAAAAAAAAY+OuVcJTfBbO18ER9VnjBhtkn0b46Te0RDmumdEq5ysjlGx7Xym+3t7TxuDiVot/9O093qtNn9lEV9FXtqlBuMk4tb0y8reLVi0Sta2raN4l8GzZ6YeiVkowhFynJpRit7bM1ibTtDnlvXHSbWnb1dc1Y1ehg61unbJfaWcW/JjyiWuHFFIeM1utyam+89vDeJHZCSAAAAGQEdFckBIAAAAAAAAAAAAAAAABDA0esuI6sa8976T7lu+PuPNf8gz7Urj379U/QU3tNpV88nutWJpDR8LllJZNeLJb4/quwlaXV2wz0dsWWcc7wqmPwM6XlNbH4sl4sv8AfsPR6fUUzV3rPXwtcWauSOnfwu30caGXRli5ra84058Ip9aXr3ep8y30mL/KXnuNavmt7KJ6eq+JE1Q7JAAAAAAAAAAAAAAAAAAAAAAAAAEMCq6fszua5JL5/M8Rx7Jz6nbxC40MbY2tKRNAw+LqFYuhKKknsyfFvcSNPa0Xjk77kX5PihdsBhI01wqgsowioruSPo2KJrSIl57Jeb3m0+rKOjQAAAOe4nXrExnOKqoyjKSWaszyUmvKLzHwulqxO89v/eisnW3iZjaHn9fsT5rD+yz9xv8AZGPzP0/pj363iD6/YnzWH9ln7h9kY/M/T+j363iD6/YnzWH9ln7h9kY/M/T+j363iD6/YnzWH9ln7h9kY/M/T+j363iD6/YnzWH9ln7h9kY/M/T+j363iD6/YnzWH9ln7h9kY/M/T+j363iD6/YnzWH9ln7h9kY/M/T+iddbxCy6oafnjI2uyNcZQcdkM8nGSe15t8YsrNZpYwTER6pmnzTkid1hIaQAAAAAAAAAAEMwKdpZ532d/wAkfP8Aitt9Xk+a80kbYoYhXJIBk6OjndWvzL3bfkTuHV5tTSJ8uGo6YrLofQ1CGQAAQwOKY772305/3s9jg/66/KP4efv96fnLwO27XYG5sDc2BubA3NgbmwYYXP6NJ9fER5xrfslL9xScXjpWfn/pY6Ceswv6KRZJAAAAAAAAAAIZgU7Sq+2s7/kj59xSNtXk+f8Ape6Wd8UMQr0gAydGPK6v0l79nzJ/DZ21NJ/Nw1PXFZdD6FuoQyAAABxPHfe2+nP+9nscH/XX5R/Dz9/vT85/l4HVqAAAAAAAuP0bL7W70I/3MpOMdq/qn6HvLoKKRZpAAAAAAAAAAIZgVPT0Mrm+aT92XyPD8dx8mq38xC50U742vKdMDDHoeE6PWzS6OTzexLJ5nfBzRkia94ndzyzWKfFPRd8NfGyMZxecZJSi1xTWaPpFJma7y89ExMbw9jdkAAQwOO43R97tsypva6c8mqrMmuk+w9Xg1GL2dY5o7Qor47c09PLx/wAOv8xf/Js/Q7e8YvxR+7X2dvEo/wAOv8xf/Js/Qe3xfij9z2dvEp/w6/zF/wDJs/Qe8YvxR+57O3iXzPA3JNypuiltbdU0ku1tCM+OZ2i0E0tHoxzq0AA/MXj6M6v+on/44r+tv4oouMT1rX5/6WWhjvPyXpFMsEgAAAAAAAAAEMDQay0eJZ/pfr2r4M8x/wAhw7xXJ+ix0F+s1aI8ttK0eOKxMa49KbyXDm3ySO+DT3z25awianVYtNTmvKtaQ0jK15eLDhFP482eo0mhpgiJj73l4/XcRyamZielfC7fR7pZTreHk+vXthn+Ktvh3N+9F1gvvG0u2gzb15JXFHdYJAAAPnIxsGRkMgGRjofqrGvuOVeG8Gmula1HL8iecvgl6yfw3Bz5t49ETWZOSm0ermp6lUBgBPaR0z6PcN0ML0nvsnKXqXVX9rPM8SvzZ5jwuNHXbHus5XpQAAAAAAAAAAAMXSdHhK5R4vxfSW1EPXaf2+C2P1nt83TFfkvEufaS0jGnNPrT8jl6XI8bpeHXzW+LpHql67iuPBG1etlaxOIlZLpTeb4cl2JHpsODHipFaRt/Lx+o1OTNfmvO/wDDyOyOyMBjJ0WRtreUovNcmuKfYzNbTWd3THknHfd1rQWmK8VWrIbHunD8UJ5bU/14k6l4vC/wZoy13hszd2AAAAAA8cRfGuLnNqMYrOUnuSQrXmnaO7FpiI3lybWLS7xdzs2qC6tcXvUOb7XvPVaLS+wpt6+ql1Gaclt/RqyY4gYfVcHJqMVnJtKK5ybyS9rNMluWsz+Tasbzs7NovCqmquqO6EYx78ltZ4/Jk57zbyvcdeWsQyzRuAAAAAAAAAAACJIDmuvmh3Vd4eC+zsfWy/Dblt9u/wBpDzU2ndTa7By2547SqpxV4AAy9GaRtw1isql0ZcV+GS5NcUbVvyz0dMWW2O29XRtBa20YhKM2qbfIk+rJ/llx+JLpmi3dc4dZTJ0nusUGdUx9AAIYGu0rpmjDRzumovLZBbZy7omlr1ju45M9McfFLnWseslmLfRS8HSnshntk+c+3s3F9wmMFo5qzvP5qzNqpy9I6Q0ZdowAMC0ahaL8Lf4aS6lW7tta2exbfYVXFNRyU5I7z/Cbo8XNbm9HSonnlqkyAAAAAAAAAAAAAYuksDC+qdViTjJZPmnwa7U8mYtG8bNMmOL15Zci0xoyzC2uqzvjLLZOHCSIN6TWXns2G2O879mCaOQAAAbPAafxVGyu6fRX4JPpw9kt3qN4yWjs701OWnaW5q19xK8auifblOPzN/eLeEmOI5I9IfU9f8S91VEf/t/Mz7ezM8RyeIa3Ga2423Z4Xwa5VJR9+/3ms5bS4X1mW0bdmlnNybcm5N73Jtt97Zznr3RrTNu6EzbHltjtvEsJ/wCZHq9BxamWIrk6Wda23C63hs9sHhZ3TjVWulOTyS+LfYlmcc2auOs3n0b0pN52h13QmjYYamNUduW2UstspvezymfNOW/PK7xY4x12hsDk6AAAAAAAAAAAAAAIYGr09oWvF19CeySzdc140JfNc0aXpFo6uGowRlrtLlelNGW4ax12xyf4ZLxZrnFkK9JpPVQ5sVsU7SwzVzAAAbAAGwAAAEmYmYneB6YeqVklCEXKbeUYxWbk/wDnEv8AQcWmJ9nl7efV1x72ttDp2qmrywsOlPKV8l1pLdBeTH5via6zVzqJ2jtC70+CMcb+qwohQkpMgAAAAAAAAAAAAAABGQGJpLRlWIg67o9KPDhKL5p8GYmsT3c8mOt42lznTmqN9Gc6s76uaX2kV+aK3969xDvimOyoz6K1OtesK4cuyDPw9wAAAAAAADZ6H0Hfin9lHKHG2SarXr4vsRvXHaUjDp75e0dPLo+r+rtOEXVznY11rJJZvsXJdhLpjivzXODTVxR0brI32SEmQAAAAAAAAAAAAAAAAAAENAafSurOGxGbnDoz85Dqy9fB+s0tjrKPk0uO/eFU0hqFbHN0WwsXCM04S9qzT9xwnBPogX4daPuy0mJ1bxle/D2PthlNf0nOcdo9EW2ly17wwZYG5bHTcu+uf6GvJbw5ezt4n9iOCue6q1/+uf6Dlt4PZ3n0lk0aBxc/Fw93rj0V7ZZGYx2n0dI0+Se0Nvg9R8VPLwjrpXa+nJepbPedIwWnukU4fknv0WbRepOFq22Z4iX59kM/QXzzOtcFYTseix179VkhWo7EkktySySR2jolxWI7PsMgAAAAAAAAAAAAAAAAAAAAAACMgxsjog6+U5AMgyZBgyDKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k="/>
  ))


 
  