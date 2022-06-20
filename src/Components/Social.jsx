export default function Social({ propdata }) {
  // propdata : {
  //   gender,
  //   name,
  //   location,
  //   email,
  //   login,
  //   dob,
  //   registered,
  //   phone,
  //   cell,
  //   id,
  //   picture,
  //   nat
  //   }
  console.log(propdata);
  return (
    <>
      <div>
        <h1>
          {propdata[0].name.title} {propdata[0].name.first}{" "}
          {propdata[0].name.last}
        </h1>
        <p>{propdata[0].id.value}</p>
        <img src={propdata[0].picture.medium} />
        <div>
          ph no: {propdata[0].phone}
          <br />
          email: {propdata[0].email}
          <br />
          from :{propdata[0].location.country}
        </div>
      </div>
    </>
  );
}
