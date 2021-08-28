new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return this.valor != 37 ?
                     'Diferente de 37' : 'Igual 37'

        }
    },
    watch: {
        resultado() {
            
            setTimeout(() => {
                this.valor = 0}, 2000)
        }
    }    
});