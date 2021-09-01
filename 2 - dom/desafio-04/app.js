new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque'
	},
	methods: {
		iniciarEfeito() {
			if (this.classe1 == 'destaque') {
				return this.classe1 = 'encolher'
			} else {
				return this.classe1 = 'destaque'
			}
		},
		iniciarProgresso() {

		}
	}
})
