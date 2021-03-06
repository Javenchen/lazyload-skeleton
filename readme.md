

# lazyload-skeleton

## 效果图



![效果图](https://forfujie.oss-cn-shenzhen.aliyuncs.com/687474703a2f2f626c6f672e676f6a6176656e2e636f6d2f7374617469632f75706c6f61642f32303139303131352f75706c6f61645f38653231373563383261353039333864633230363934653766306465326535302e706e67.png )



## 使用方法

**1.引入js**

```html
<script src="./path/lazySkeleton.js"></script>
```

**2.只是用img-lazyload**

为图片添加class为ylazy，设置data-src为图片url。

```js
<img class="ylazy" data-src="img-url">
```

**3.使用skeleton**

设置div的class 为 yskeleton，row代表行数。

```html
<div class="yskeleton" row="5">
     <div class="content">
           骨架占位结束后，显示的内容
     </div>
</div>
```

**四种占位样式：只用增加第二class**

```HTML
<!-- 段落样式 -->            
<div class="yskeleton" row="5">
     <div class="content">
           骨架占位结束后，显示的内容
     </div>
</div>
<!-- 用户段落样式 -->
<div class="yskeleton user" row="5">
     <div class="content">
           骨架占位结束后，显示的内容
     </div>
</div>
<!-- 卡片样式 -->
<div class="yskeleton card" >
     <div class="content">
           骨架占位结束后，显示的内容
     </div>
</div>
<!-- 用户卡片样式 -->
<div class="yskeleton user-card">
     <div class="content">
           骨架占位结束后，显示的内容
     </div>
</div>
```

**添加loaded属性，结束占位**

```html
<div class="yskeleton loaded">
     <div class="content">
           骨架占位结束后，显示的内容
     </div>
</div>
```



**5. 可以imgLazyLoad成功后，触发skeleton（骨架）结束占位，只需要content里包含带lazy的图片。**

```html
<div class="yskeleton" row="5">
     <div class="content">
         <img class="ylazy" data-src="img-url">
     </div>
</div>
```

