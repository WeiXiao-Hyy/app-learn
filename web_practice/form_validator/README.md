创建的box, width和height为准确值
```css
* {
    box-sizing: border-box;
}
```

absolute的bottom和left是相对于父元素relative的元素
```css
.form-control small {
    position: absolute;
    bottom: 0;
    left: 0;
}
```

--success-color, --error-color定义变量
```css
:root {
    --success-color: #2ecc71
}
```