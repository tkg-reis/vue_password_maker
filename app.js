'use strict';
{
    const myApp = {
        data() {
            return {
                big_alpha: true,
                small_alpha: true,
                numbers: true,
                symbols: true,
                length: 10
            }
        },
        computed: {
            password() {
                const big_alpha_string = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
                const small_alpha_string = 'abcdefghjklmnpqrstuvwxyz'
                const numbers_string = '23456789'
                const symbols_string = '!@#$%^&*()'
                let source = ''
                source += (this.big_alpha ? big_alpha_string : '')
                source += (this.small_alpha ? small_alpha_string : '')
                source += (this.numbers ? numbers_string : '')
                source += (this.symbols ? symbols_string : '')
                // console.log(source);
                // console.log(source.length);
                let ret = '';
                for(let i = 0; i < this.length; i++) {
                    console.log(this);
                    let rand = Math.floor(Math.random() * source.length) ;
                    // console.log(rand);
                    ret += source.substr(rand,1)
                }
                return ret
            }
        }
    }

    Vue.createApp(myApp).mount('#app')
}