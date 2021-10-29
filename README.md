## asset file은 public 내부에 저장

```js
app.use(express.static(__dirname + "/public"));
```

접근하고 난 뒤에는

```js
app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
  })
);
```

처럼 express에서 주로 사용할 view engine을 설정해주고

view에서 static file에 접근해준다.

      <img src="img/IMG_1913.JPG" alt="Soyami love" />

      ---

server에서 view로 동적 변수를 전달하는 방법
(handlebars 환경의 경우)

```js
app.get("/about", (req, res) => {
  const fortunes = ["hello 1 ", "hello 2 ", "hello 3 ", "hello 4 ", "hello 5 "];

  const randFortunes = fortunes[Math.floor(Math.random() * fortunes.length)];

  res.render("about", { fortunes: randFortunes });
});
```

```handlebars
{{#if fortunes}}
  <p>show me something</p>
  <blockquote>{{fortunes}}</blockquote>
{{/if}}
```

이런.. 식으로 사용할 수 있다.
