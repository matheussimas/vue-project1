new Vue({
    el: '#desafio',
    data: {
        myName: ' Matheus',
        age: 27,
        image: 'https://midias.jb.com.br/_midias/jpg/2020/04/03/627x418/1_150695637759d2545947feb_1506956377_3x2_md-527922.jpg'
        },
        methods: {
            multAge: function () {
                return this.age * 3
            },
            randomNumber: function () {
                return Math.random(0,1)
            },
        }
})