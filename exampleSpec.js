export default function(spec) {
  spec.describe('text the input', function() {
    spec.it('works', async function() {

      await spec.fillIn('Home.TextInput', 'Amy');
    });
  });

  