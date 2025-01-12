```javascript
const pipeline = [
  {
    $match: {
      userId: 'someUser',
      date: {
        $gte: new Date('2023-10-26T00:00:00Z'),
        $lte: new Date('2023-10-27T00:00:00Z')
      }
    }
  },
  {
    $group: {
      _id: '$userId',
      total: { $sum: '$amount' }
    }
  }
];

db.collection('transactions').aggregate(pipeline).toArray((err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});
```