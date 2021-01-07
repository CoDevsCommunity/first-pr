/*
 *  Array.prototype.push()
 *  Este método incorpora elementos a un array al final, como parametro se le pasa el valor que quieres agregar o directamente otro array 
 */

/** 
 * Esta condicion devuelve el valor un array de strings actualizado con nuevos strings
 * @param { Array } friendsInParty - array de amigos en tu fiesta
 * @param { Array } newFriendsArrived - array de amigos que acaban de llegar
*/
    const friendsInParty = ['Carlos Alberto', 'Maria Julieta', 'Marcos Gabriel', 'Alejandro Manuel'];
    let newFriendsArrived = ['Juan Carlos', 'Victor josé', 'Daniela josé'];

    if(newFriendsArrived.length > 0) {
        function PushFriends(already, arrived) {
        already.push(arrived)
        console.log(`Tus amigos ${arrived} están aqui y ahora estan todos aqui!`)
    }    
    PushFriends(friendsInParty, newFriendsArrived);
}


