import Openfort from "@openfort/openfort-node";

async function example() {
  const openfort = new Openfort("sk_test_44b87423-9f53-5cf9-ae18-82b3e8bae139");
  const players = await openfort.players.getPlayers();
  for (const player of players.body.data) {
    console.log(player.id);
  }

  const newPlayer = await openfort.players.createPlayer("Test");

  const player_id = newPlayer.body.id;
  const policy_id = "pol_55814cce-9f5b-463a-a3ac-e20bde85903b";
  const valid_until = 281474976710655;
  const valid_after = 0;
  const chain_id = Number(process.env.NEXTAUTH_OPENFORT_CHAINID!);
  const address = "0x9590Ed0C18190a310f4e93CAccc4CC17270bED40";

  await openfort.players.createPlayerSession(
    player_id,
    address,
    chain_id,
    valid_until,
    valid_after,
    policy_id
  );

  const transactionIntents =
    await openfort.transactions.getTransactionIntents();
  for (const intent of transactionIntents.body.data) {
    console.log(`Intent ${intent.id} by ${intent.player}`);
  }
}

example().catch((e) => console.error(e));
