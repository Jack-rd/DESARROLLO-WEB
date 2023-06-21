const User = {
    get: (req, res) => {
        res.status(200).send('este es un venao');
    },
    list: (req, res) => { 
        res.status(200).send('Welcome Venao');

    },
    create: (req, res) => {
        res.status(201).send('Making a Venao');
    },
    update: (req, res) => {
        res.status(204).send('Actualizando el Venao');
    },
    destroy: (req, res) => {
        res.status(204).send('Eliminando el Venao');
    }
}
module.exports = User