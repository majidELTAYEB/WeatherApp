export default function Prevision({ city, list }) {
  var new_array = list.map(function (element) {
    var temp = new Date(parseInt(element.dt) * 1000).toLocaleString("en-us", {
      weekday: "long",
    });
    return temp;
  });

  return (
    <div className="allprevision">
      {list.map((hello, index) => {
        return (
          <div className="contprevision">
            <div>
              <p>{new_array[index].substring(0, 3)}</p>
            </div>

            <div>
              <img
                height={80}
                width={100}
                src={require(`../logo/cloud/${hello.weather[0].main}.png`)}
              />
            </div>

            <div>
              <p>{hello.weather[0].main}</p>
            </div>

            <div>
              <p>{parseInt(hello.temp.day - 273)}°</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
