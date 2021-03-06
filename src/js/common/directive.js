// import Vue from 'vue'
Vue.directive("filterSpecial", {
    update: function(el, { value, modifiers }, vnode) {
        try {
            let $el = el.children[0];
            //此处可以debug看看el具体值是什么,这里演示的是原生控件input,如果是使用element中的<el-input />标签,需要通过 el.children[0] 拿到原生input.
            if (!$el.value) {
                return false;
            }
            $el.value = $el.value.replace(/[\n\r\t]/g, " ");
            console.log($el.value);
            $el.dispatchEvent(new Event(modifiers.lazy ? "change" : "input"));
        } catch (e) {}
    }
});
Vue.directive("delDoubleQuo", {
    update: function(el) {
        try {
            let $el = el.children[0];
            if (!$el.value) {
                return "";
            }

            $el.value = $el.value.replace(/\"/g, "");

            $el.dispatchEvent(new Event("input"));
        } catch (e) {}
    }
});
Vue.directive("preventReClick", {
    inserted(el, binding) {
        el.addEventListener("click", () => {
            if (!el.disabled) {
                el.disabled = true;
                setTimeout(() => {
                    el.disabled = false;
                }, binding.value || 2000);
            }
        });
    }
});
//对于数据过多的下拉框进行指令封装
Vue.directive("el-select-loadmore", {
    bind(el, binding) {
        // 获取element-ui定义好的scroll盒子
        const SELECTWRAP_DOM = el.querySelector(
            ".el-select-dropdown .el-select-dropdown__wrap"
        );
        SELECTWRAP_DOM.addEventListener("scroll", function() {
            const condition =
                this.scrollHeight - this.scrollTop <= this.clientHeight;
            if (condition) {
                binding.value();
            }
        });
    }
});
Vue.directive("defaultSelect", {
    // componentUpdated(el,binding,vnode){
    //   console.log(el,binding,vnode)
    // }
    componentUpdated(el, binding, vnode) {
        const values = binding.value;
        // 需要隐藏的标签索引;
        const indexs = [];
        values.map((item, index) => {
            indexs.push(index);
        });
        const dealStyle = function(tags) {
            tags.forEach((el, index) => {
                if (
                    indexs.includes(index) &&
                    ![...el.classList].includes("select-tag-close-none")
                ) {
                    el.classList.add("none");
                }
            });
        };
        // 设置样式 隐藏close icon
        const tags = el.querySelectorAll(".el-tag__close");
        if (tags.length === 0) {
            // 初始化tags为空处理
            setTimeout(() => {
                const tagTemp = el.querySelectorAll(".el-tag__close");
                dealStyle(tagTemp);
            });
        } else {
            dealStyle(tags);
        }
    }
});
