new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertButton() {
            alert('Não clique nesse botão!')
        },
        replicateValue(event) {
            this.valor = event.target.value
        }
    }
})