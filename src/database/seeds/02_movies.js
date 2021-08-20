exports.seed = (knex) => {
    return knex('Movies').del().then(() => {
        return knex('Movies').insert([
            {
                Title: 'Beetlejuice',
                Year: '1988',
                Director: 'Tim Burton',
                Plot: `A couple of recently deceased ghosts contract the services of a
                    "bio-exorcist" in order to remove the obnoxious new owners of their house.`,
            },
            {
                Title: 'The Cotton Club',
                Year: '1984',
                Director: 'Francis Ford Coppola',
                Plot: `The Cotton Club was a famous night club in Harlem. The story follows
                    the people that visited the club, those that ran it, and is peppered
                    with the Jazz music that made it so famous.`,
            },
            {
                Title: 'The Shawshank Redemption',
                Year: '1994',
                Director: 'Frank Darabont',
                Plot: `Two imprisoned men bond over a number of Years, finding solace and
                    eventual redemption through acts of common decency.`,
            },
            {
                Title: 'Crocodile Dundee',
                Year: '1986',
                Director: 'Peter Faiman',
                Plot: `An American reporter goes to the Australian outback to meet an eccentric
                    crocodile poacher and invites him to New York City.`,
            },
            {
                Title: 'Valkyrie',
                Year: '2008',
                Director: 'Bryan Singer',
                Plot: `A dramatization of the 20 July assassination and political
                    coup plot by desperate renegade German Army officers
                    against Hitler during World War II.`,
            },
            {
                Title: 'Ratatouille',
                Year: '2007',
                Director: 'Brad Bird, Jan Pinkava',
                Plot: `A rat who can cook makes an unusual alliance with a young kitchen worker
                    at a famous restaurant.`,
            },
            {
                Title: 'City of God',
                Year: '2002',
                Director: 'Fernando Meirelles, Kátia Lund',
                Plot: `Two boys growing up in a violent neighborhood of Rio de Janeiro
                    take different paths: one becomes a photographer, the other a drug dealer.`,
            },
            {
                Title: 'Memento',
                Year: '2000',
                Director: 'Christopher Nolan',
                Plot: `A man juggles searching for his wife's murderer and
                    keeping his short-term memory loss from being an obstacle.`,
            },
            {
                Title: 'The Intouchables',
                Year: '2011',
                Director: 'Olivier Nakache, Eric Toledano',
                Plot: `After he becomes a quadriplegic from a paragliding accident,
                    an aristocrat hires a young man from the projects to be his caregiver.`,
            },
            {
                Title: 'Stardust',
                Year: '2007',
                Director: 'Matthew Vaughn',
                Plot: `In a countryside town bordering on a magical land, a young man makes
                    a promise to his beloved that he'll retrieve a fallen star by
                    venturing into the magical realm.`,
            },
            {
                Title: 'Apocalypto',
                Year: '2006',
                Director: 'Mel Gibson',
                Plot: `As the Mayan kingdom faces its decline, the rulers insist the key to
                    prosperity is to build more temples and offer human sacrifices.
                    Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.`,
            },
            {
                Title: 'Taxi Driver',
                Year: '1976',
                Director: 'Martin Scorsese',
                Plot: `A mentally unstable Vietnam War veteran works as a night-time taxi driver
                    in New York City where the perceived decadence and sleaze feeds his urge
                    for violent action, attempting to save a preadolescent prostitute
                    in the process.`,
            },
            {
                Title: 'No Country for Old Men',
                Year: '2007',
                Director: 'Ethan Coen, Joel Coen',
                Plot: `Violence and mayhem ensue after a hunter stumbles upon a drug deal
                    gone wrong and more than two million dollars in cash near the Rio Grande.`,
            },
            {
                Title: 'Planet 51',
                Year: '2009',
                Director: 'Jorge Blanco, Javier Abad, Marcos Martínez',
                Plot: `An alien civilization is invaded by Astronaut Chuck Baker,
                    who believes that the planet was uninhabited. Wanted by the military,
                    Baker must get back to his ship before it goes into orbit without him.`,
            },
            {
                Title: 'Looper',
                Year: '2012',
                Director: 'Rian Johnson',
                Plot: `In 2074, when the mob wants to get rid of someone,
                    the target is sent into the past, where a hired gun awaits - someone like Joe -
                    who one day learns the mob wants to 'close the loop' by sending
                    back Joe's future self for assassination.`,
            },
        ]);
    });
};
