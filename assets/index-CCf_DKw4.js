(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={"machine-chest-press":{id:`machine-chest-press`,name:`Machine Chest Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`chest-press`],setup:[`Set the seat so the handles line up with the middle of your chest.`,`Sit with your back and head flat against the pad, feet flat on the floor.`],steps:[`Grip the handles and press them forward until your arms are almost straight.`,`Bring them back slowly, about 2 seconds, until you feel a light stretch in your chest.`],mistakes:[`Seat too low, so your shoulders do the work instead of your chest.`,`Letting the weight stack slam between reps.`],stress:{shoulders:`moderate`},video:{youtubeId:`B-zyH8OTlsg`,channel:`Hammer Fitness`}},"dumbbell-bench-press":{id:`dumbbell-bench-press`,name:`Dumbbell Bench Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit on the end of a flat bench with dumbbells on your thighs.`,`Lie back, bringing the dumbbells to the sides of your chest.`],steps:[`Press both dumbbells up until your arms are straight above your chest.`,`Lower slowly until your elbows are a little below the bench.`],mistakes:[`Elbows flared straight out to the sides — keep them at about 45° from your body.`,`Arching your lower back off the bench.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`sTYWWaunX8o`,channel:`Born Fitness`}},"incline-dumbbell-press":{id:`incline-dumbbell-press`,name:`Incline Dumbbell Press`,muscles:`Upper chest, front shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline, about 30°.`,`Sit back with a dumbbell at each shoulder.`],steps:[`Press up and slightly in until your arms are straight.`,`Lower slowly back to shoulder level.`],mistakes:[`Bench set too steep, which turns it into a shoulder exercise.`,`Bouncing the weights at the bottom.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`c1ZX5ZXMQVk`,channel:`Vivian Ngo`}},"pec-deck-fly":{id:`pec-deck-fly`,name:`Pec Deck Fly`,muscles:`Chest`,equipment:[`pec-deck`],setup:[`Set the seat so the handles are at chest height.`,`Set the arms so you start with a comfortable stretch, not a deep one.`],steps:[`With a slight bend in your elbows, bring the handles together in front of you.`,`Squeeze for a second, then open slowly.`],mistakes:[`Starting with the arms pulled too far back.`,`Shrugging your shoulders up toward your ears.`],stress:{shoulders:`moderate`},video:{youtubeId:`hZ0CGRaKwbQ`,channel:`Hammer Fitness`}},"cable-fly":{id:`cable-fly`,name:`Cable Chest Fly`,muscles:`Chest`,equipment:[`cable`],setup:[`Set both pulleys at shoulder height with single handles.`,`Step forward into a split stance.`],steps:[`With soft elbows, bring the handles together in front of your chest.`,`Open back out slowly until your hands are in line with your chest.`],mistakes:[`Bending and straightening your elbows — it should be a hug, not a press.`],stress:{shoulders:`moderate`},video:{youtubeId:`pJDbn8Kyx0o`,channel:`StrengthLog`}},"machine-shoulder-press":{id:`machine-shoulder-press`,name:`Machine Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`shoulder-press`],setup:[`Set the seat so the handles start at about shoulder height.`,`Sit with your back flat against the pad.`],steps:[`Press the handles up until your arms are almost straight.`,`Lower slowly back to shoulder height.`],mistakes:[`Arching your lower back off the pad.`,`Pushing your head forward.`],stress:{shoulders:`moderate`},video:{youtubeId:`e5gJP7quyGk`,channel:`Vivian Ngo`}},"seated-dumbbell-shoulder-press":{id:`seated-dumbbell-shoulder-press`,name:`Seated Dumbbell Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench upright with your back supported.`,`Hold a dumbbell at each shoulder, palms forward.`],steps:[`Press up until your arms are straight overhead.`,`Lower slowly back to your shoulders.`],mistakes:[`Leaning back and arching to push heavier weight.`],stress:{shoulders:`moderate`,lowerBack:`moderate`},video:{youtubeId:`fuQpuu--bMI`,channel:`That Fit Friend`}},"dumbbell-lateral-raise":{id:`dumbbell-lateral-raise`,name:`Seated Lateral Raise`,muscles:`Side shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench holding light dumbbells at your sides.`],steps:[`Raise your arms out to the side until they are level with your shoulders.`,`Lower slowly over about 2 seconds.`],mistakes:[`Shrugging — keep your shoulders pressed down, away from your ears.`,`Going too heavy and swinging the weights up.`],stress:{neckUpperBack:`moderate`},video:{youtubeId:`yKAxVcU3nfw`,channel:`Vivian Ngo`}},"cable-tricep-pushdown":{id:`cable-tricep-pushdown`,name:`Cable Tricep Pushdown`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley high with a rope or straight bar.`,`Stand close with your elbows tucked at your sides.`],steps:[`Push down until your arms are straight, without moving your elbows.`,`Let it rise slowly back to about chest height.`],mistakes:[`Elbows drifting forward.`,`Leaning your whole body over the bar.`],stress:{},video:{youtubeId:`d-ySLTHUgQA`,channel:`Vivian Ngo`}},"overhead-cable-extension":{id:`overhead-cable-extension`,name:`Overhead Cable Tricep Extension`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley low with a rope.`,`Face away from the machine, rope behind your head.`],steps:[`Straighten your arms overhead.`,`Bend your elbows slowly to lower the rope behind your head.`],mistakes:[`Elbows flaring wide.`,`Arching your lower back.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`mRozZKkGIfg`,channel:`Bodybuilding.com`}},"assisted-dip":{id:`assisted-dip`,name:`Assisted Dip`,muscles:`Triceps, chest`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the dip handles.`],steps:[`Lower until your elbows are at about 90°.`,`Push back up to straight arms.`],mistakes:[`Going too deep, which strains the front of the shoulder.`],stress:{shoulders:`high`,wrists:`moderate`},video:{youtubeId:`slD5hhM_thg`,channel:`UMW Campus Recreation`},weightKind:`assist`},"lat-pulldown":{id:`lat-pulldown`,name:`Lat Pulldown`,muscles:`Upper back (lats), biceps`,equipment:[`lat-pulldown`],setup:[`Set the knee pad so your thighs are snug underneath it.`,`Grip the bar a little wider than your shoulders.`],steps:[`Pull the bar down to your upper chest, leading with your elbows.`,`Let it rise slowly until your arms are straight.`],mistakes:[`Pulling the bar behind your neck — always pull to the front.`,`Leaning far back and using momentum.`],stress:{wrists:`moderate`},video:{youtubeId:`oMJmAHRZXBk`,channel:`UC Davis Health`}},"assisted-pullup":{id:`assisted-pullup`,name:`Assisted Pull-Up`,muscles:`Upper back (lats), biceps`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the top handles.`],steps:[`Pull yourself up until your chin is over the handles.`,`Lower slowly to straight arms.`],mistakes:[`Craning your neck to get your chin over.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`fnHeovkmkkk`,channel:`Fitness 19`},weightKind:`assist`},"chest-supported-row":{id:`chest-supported-row`,name:`Chest-Supported Dumbbell Row`,muscles:`Mid back, rear shoulders, biceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline and lie face down on it, chest on the pad.`,`Let a dumbbell hang straight down from each hand.`],steps:[`Pull the dumbbells up toward your hips, squeezing your shoulder blades together.`,`Lower slowly until your arms are straight.`],mistakes:[`Lifting your chest off the pad.`,`Shrugging the weights up instead of rowing.`],stress:{},video:{youtubeId:`Nx0TzjgsI-0`,channel:`PureGym`}},"seated-cable-row":{id:`seated-cable-row`,name:`Seated Cable Row`,muscles:`Mid back, biceps`,equipment:[`seated-row`],setup:[`Sit with feet on the footplates and knees slightly bent.`,`Grip the handle and sit up tall.`],steps:[`Pull the handle to your belly button, squeezing your shoulder blades together.`,`Let your arms straighten slowly without rounding your back.`],mistakes:[`Rocking your torso back and forth.`,`Rounding your lower back as the handle goes forward.`],stress:{lowerBack:`moderate`},video:{youtubeId:`oFtfkSElE0s`,channel:`Hammer Fitness`}},"face-pull":{id:`face-pull`,name:`Cable Face Pull`,muscles:`Rear shoulders, upper back`,equipment:[`cable`],setup:[`Set the pulley at about face height with a rope.`,`Hold the rope ends with thumbs pointing back.`],steps:[`Pull the rope toward your face, splitting the ends apart beside your ears.`,`Return slowly with control.`],mistakes:[`Going heavy — this is a light, controlled exercise.`,`Shrugging toward your ears.`],stress:{},video:{youtubeId:`eTCBSFlCJ_s`,channel:`NASM`}},"reverse-pec-deck":{id:`reverse-pec-deck`,name:`Reverse Pec Deck`,muscles:`Rear shoulders, upper back`,equipment:[`pec-deck`],setup:[`Sit facing the pad, chest against it.`,`Set the handles so your arms start in front of you.`],steps:[`With slightly bent elbows, open your arms out to the side.`,`Return slowly.`],mistakes:[`Shrugging your shoulders up.`,`Swinging the weight.`],stress:{},video:{youtubeId:`v0rJuhEa59c`,channel:`FIT.nl`}},"dumbbell-curl":{id:`dumbbell-curl`,name:`Seated Dumbbell Curl`,muscles:`Biceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench with a dumbbell in each hand, palms forward.`],steps:[`Curl the weights up, keeping your elbows at your sides.`,`Lower slowly to straight arms.`],mistakes:[`Swinging your body to lift the weight.`,`Elbows drifting forward.`],stress:{wrists:`moderate`},video:{youtubeId:`SW5JS2Wf2uQ`,channel:`Horton Barbell`}},"cable-curl":{id:`cable-curl`,name:`Cable Curl`,muscles:`Biceps`,equipment:[`cable`],setup:[`Set the pulley low with a straight bar.`,`Stand close with elbows at your sides.`],steps:[`Curl the bar up toward your shoulders.`,`Lower slowly.`],mistakes:[`Leaning back to help the weight up.`],stress:{wrists:`moderate`},video:{youtubeId:`0TtZgAuC8Vw`,channel:`Holly Perkins`}},"hammer-curl":{id:`hammer-curl`,name:`Seated Hammer Curl`,muscles:`Biceps, forearms`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright with dumbbells at your sides, palms facing each other.`],steps:[`Curl up keeping your palms facing each other.`,`Lower slowly.`],mistakes:[`Swinging the weights.`],stress:{},video:{youtubeId:`bdlqQAVdcEk`,channel:`Vivian Ngo`}},"leg-press":{id:`leg-press`,name:`Leg Press`,muscles:`Thighs, glutes`,equipment:[`leg-press`],setup:[`Sit back with your lower back flat against the pad.`,`Feet shoulder-width apart, in the middle or slightly high on the platform.`],steps:[`Release the safety handles and lower the platform slowly.`,`Stop when your knees reach about 90°, before your lower back starts to lift off the pad.`,`Push back up through your whole foot, without locking your knees.`],mistakes:[`Going so deep your hips curl up off the seat.`,`Knees caving inward — keep them pointing the same way as your toes.`],stress:{knees:`moderate`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`90NY9tka1TQ`,channel:`Vivian Ngo`}},"barbell-back-squat":{id:`barbell-back-squat`,name:`Barbell Back Squat`,muscles:`Thighs, glutes, core`,equipment:[`squat-rack`],setup:[`Set the bar at upper-chest height.`,`Step under it and rest it across your upper back.`],steps:[`Squat down until your thighs are about parallel to the floor.`,`Drive back up through your feet.`],mistakes:[`Knees caving in.`,`Rounding your back at the bottom.`],stress:{knees:`high`,lowerBack:`high`,neckUpperBack:`moderate`,feet:`moderate`},video:{youtubeId:`8PMjqgR8Wa8`,channel:`Barbell Rehab`}},"goblet-squat":{id:`goblet-squat`,name:`Goblet Squat`,muscles:`Thighs, glutes`,equipment:[`dumbbells`],setup:[`Hold one dumbbell upright against your chest.`,`Feet slightly wider than shoulders, toes turned out a little.`],steps:[`Sit down between your heels, keeping your chest up.`,`Stand back up.`],mistakes:[`Heels lifting off the floor.`,`Knees caving in.`],stress:{knees:`high`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`zsN2WvklwDk`,channel:`Janice Liang`}},"glute-bridge":{id:`glute-bridge`,name:`Dumbbell Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[`dumbbells`,`mat`],setup:[`Lie on your back on a mat, knees bent, feet flat and hip-width apart.`,`Rest a dumbbell across your hips and hold it in place.`],steps:[`Squeeze your glutes and lift your hips until your body is straight from knees to shoulders.`,`Hold for a second, then lower slowly.`],mistakes:[`Arching your lower back at the top — the lift should come from your glutes.`],stress:{},video:{youtubeId:`PSMW7iSi2BU`,channel:`Holly Perkins`}},"dumbbell-romanian-deadlift":{id:`dumbbell-romanian-deadlift`,name:`Dumbbell Romanian Deadlift`,muscles:`Hamstrings, glutes`,equipment:[`dumbbells`],setup:[`Stand holding dumbbells in front of your thighs, knees slightly bent.`],steps:[`Push your hips back and lower the weights along your legs, back flat.`,`Stand back up by squeezing your glutes.`],mistakes:[`Rounding your back.`,`Turning it into a squat by bending your knees a lot.`],stress:{lowerBack:`high`},video:{youtubeId:`dNQucsVf90I`,channel:`Vivian Ngo`}},"seated-leg-curl":{id:`seated-leg-curl`,name:`Leg Curl`,muscles:`Hamstrings`,equipment:[`leg-curl`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit just above your heels.`],steps:[`Bend your knees to pull the pad down and back.`,`Return slowly to almost straight.`],mistakes:[`Letting the weight snap your legs straight.`,`Lifting your hips to cheat the weight.`],stress:{knees:`moderate`},video:{youtubeId:`_2Kd0d-JEUM`,channel:`NASM`}},"hip-abduction":{id:`hip-abduction`,name:`Hip Abduction Machine`,muscles:`Outer glutes`,equipment:[`hip-abduction`],setup:[`Sit with your back against the pad, pads on the outside of your knees.`],steps:[`Push your knees outward.`,`Return slowly without letting the weights touch.`],mistakes:[`Rocking your body to move the weight.`],stress:{},video:{youtubeId:`5O_Y9l__iao`,channel:`Hammer Fitness`}},"leg-extension":{id:`leg-extension`,name:`Leg Extension`,muscles:`Front of thighs`,equipment:[`leg-extension`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit on your lower shins.`],steps:[`Straighten your legs.`,`Lower slowly.`],mistakes:[`Kicking the weight up fast.`],stress:{knees:`high`},video:{youtubeId:`MXvSzXEBOTI`,channel:`Steev`}},"dead-bug":{id:`dead-bug`,name:`Dead Bug`,muscles:`Deep core`,equipment:[`mat`],setup:[`Lie on your back with arms pointing up and knees bent at 90° above your hips.`],steps:[`Press your lower back gently into the mat.`,`Slowly lower one arm and the opposite leg toward the floor, then return. Switch sides.`],mistakes:[`Letting your lower back lift off the mat — make the movement smaller if it does.`],stress:{},video:{youtubeId:`bxn9FBrt4-A`,channel:`NASM`},weightKind:`bodyweight`},"pallof-press":{id:`pallof-press`,name:`Cable Pallof Press`,muscles:`Core, obliques`,equipment:[`cable`],setup:[`Set a cable at chest height with a single handle.`,`Stand side-on to the machine, holding the handle at your chest with both hands.`],steps:[`Press the handle straight out in front of you without letting it pull you sideways.`,`Hold for 2 seconds, bring it back. Do both sides.`],mistakes:[`Twisting toward the machine.`],stress:{},video:{youtubeId:`SY5lRzBPtM4`,channel:`Fitness Lab`}},"cable-crunch":{id:`cable-crunch`,name:`Cable Crunch`,muscles:`Abs`,equipment:[`cable`],setup:[`Set the pulley high with a rope.`,`Kneel facing the machine, rope beside your head.`],steps:[`Crunch down, bringing your elbows toward your knees.`,`Rise back up slowly.`],mistakes:[`Pulling with your arms instead of your abs.`,`Yanking your neck forward.`],stress:{lowerBack:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`0KEP6A1deBE`,channel:`Travis Tarrant`}},"side-plank":{id:`side-plank`,name:`Side Plank`,muscles:`Obliques, core`,equipment:[`mat`],setup:[`Lie on your side, propped up on your forearm, elbow under your shoulder.`],steps:[`Lift your hips so your body is a straight line.`,`Hold for 20–30 seconds. Switch sides.`],mistakes:[`Hips sagging toward the floor.`],stress:{shoulders:`moderate`},video:{youtubeId:`0M-erHBl48U`,channel:`Heal Fit Physio`},weightKind:`bodyweight`,timedSeconds:{min:20,max:30}}},t={"home-dead-bug":{...e[`dead-bug`],id:`home-dead-bug`,equipment:[]},"home-side-plank":{...e[`side-plank`],id:`home-side-plank`,equipment:[]},"bird-dog":{id:`bird-dog`,name:`Bird Dog`,muscles:`Deep core, lower back, glutes`,equipment:[],setup:[`Kneel on all fours on a mat, towel, or carpet, with your hands under your shoulders and your knees under your hips.`,`Keep your back flat and your neck long, eyes on the floor.`],steps:[`Tighten your belly and slowly reach one arm forward and the opposite leg straight back.`,`Hold for a second without letting your hips tilt or your back sag.`,`Bring them back with control, then switch sides.`],mistakes:[`Arching your lower back as the leg lifts: only raise it as high as your back stays flat.`,`Rushing and swinging the arm and leg.`],stress:{knees:`moderate`,wrists:`moderate`},video:{youtubeId:`KA0ekfSePrQ`,channel:`Tone and Tighten`},weightKind:`bodyweight`},"forearm-plank":{id:`forearm-plank`,name:`Forearm Plank`,muscles:`Abs, shoulders, glutes`,equipment:[],setup:[`Lie face down, then prop yourself up on your forearms with your elbows right under your shoulders.`,`Tuck your toes and lift your hips so your body makes one straight line.`],steps:[`Squeeze your glutes and brace your abs, as if bracing for a light punch.`,`Breathe steadily and hold. Stop when your form starts to slip.`,`Lower your knees to rest.`],mistakes:[`Letting your hips sag so your lower back arches.`,`Piking your hips up, which takes the work off your abs.`,`Holding your breath or craning your neck up.`],stress:{lowerBack:`moderate`,shoulders:`moderate`},video:{youtubeId:`gSDNblPRh1U`,channel:`Masterpiece Training`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}},"home-glute-bridge":{id:`home-glute-bridge`,name:`Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[],setup:[`Lie on your back with your knees bent and your feet flat on the floor, hip-width apart.`,`Rest your arms at your sides, palms down.`],steps:[`Press your lower back gently toward the floor, then push through your heels to lift your hips.`,`Stop when your shoulders, hips and knees make a straight line, and squeeze your glutes.`,`Lower slowly.`],mistakes:[`Lifting so high that your lower back arches: the lift should come from your glutes.`,`Pushing through your toes instead of your heels.`],stress:{},video:{youtubeId:`evOnUDkq9f4`,channel:`Girls Gone Strong`},weightKind:`bodyweight`},"bicycle-crunch":{id:`bicycle-crunch`,name:`Bicycle Crunch`,muscles:`Abs, obliques`,equipment:[],setup:[`Lie on your back with your hands lightly behind your head and your knees lifted.`,`Press your lower back gently into the floor.`],steps:[`Bring one elbow toward the opposite knee while you straighten the other leg.`,`Switch sides slowly, like pedaling a bike.`,`Keep your shoulders lifted off the floor the whole time.`],mistakes:[`Pulling on your neck with your hands: keep them light.`,`Going fast, which uses momentum instead of your abs.`,`Letting your lower back arch off the floor.`],stress:{neckUpperBack:`high`,lowerBack:`moderate`},video:{youtubeId:`eqg47ZuGZXQ`,channel:`UCLA Health`},weightKind:`bodyweight`},"mountain-climber":{id:`mountain-climber`,name:`Mountain Climber`,muscles:`Abs, shoulders, hips`,equipment:[],setup:[`Start in a high plank with your hands under your shoulders and your body in one straight line.`],steps:[`Drive one knee toward your chest, then switch legs, like running in place on the floor.`,`Keep your hips level and your core tight. Start slowly and speed up only if your form holds.`],mistakes:[`Hips bouncing up and down.`,`Letting your lower back sag.`,`Shoulders drifting behind your hands.`],stress:{knees:`high`,wrists:`moderate`,shoulders:`moderate`},video:{youtubeId:`gW-q50V6Z_0`,channel:`Born Fitness`},weightKind:`bodyweight`}},n={"chin-tuck":{id:`chin-tuck`,name:`Chin Tuck`,muscles:`Deep neck muscles`,equipment:[],setup:[`Sit or stand tall with your shoulders relaxed and your eyes looking straight ahead.`],steps:[`Slide your head straight back, as if making a double chin. Keep your chin level, not nodding down.`,`Hold for about 3 seconds, then relax.`,`Repeat slowly.`],mistakes:[`Tipping your chin down or up instead of sliding straight back.`,`Shrugging your shoulders or holding your breath.`,`Pushing into pain: go only as far as a gentle stretch.`],stress:{},video:{youtubeId:`h_1-7H0eOfo`,channel:`PhysioExercise`},weightKind:`bodyweight`},"open-book":{id:`open-book`,name:`Open Book`,muscles:`Upper back, chest, shoulders`,equipment:[],setup:[`Lie on your side with your knees bent and stacked, and your arms straight out in front with palms together.`],steps:[`Keeping your knees together, lift the top arm and open it toward the ceiling and behind you, letting your eyes follow your hand.`,`Pause for a breath, then bring it back slowly.`,`Do all your reps, then switch sides.`],mistakes:[`Letting your knees and hips roll back: the turn should come from your upper back.`,`Forcing your arm to the floor: stop where it feels comfortable.`],stress:{},video:{youtubeId:`917w2gqZwZQ`,channel:`Petroski Physio`},weightKind:`bodyweight`},"wall-slide":{id:`wall-slide`,name:`Wall Slide`,muscles:`Upper back, shoulders`,equipment:[],setup:[`Stand with your heels a few inches from a wall and press your head, upper back and hips against it.`,`Bend your elbows and rest your forearms and the backs of your hands on the wall, like a goalpost.`],steps:[`Slowly slide your arms up the wall as far as you can keep contact.`,`Slide them back down with control.`],mistakes:[`Arching your lower back or flaring your ribs to reach higher.`,`Letting your forearms leave the wall: go only as high as you can keep contact.`],stress:{shoulders:`moderate`},video:{youtubeId:`Eaj_NG5_hIo`,channel:`British Elbow & Shoulder Society`},weightKind:`bodyweight`},"cat-cow":{id:`cat-cow`,name:`Cat-Cow`,muscles:`Spine, hips`,equipment:[],setup:[`Get on your hands and knees, with your hands under your shoulders and your knees under your hips.`,`Put a folded towel or mat under your knees if the floor is hard.`],steps:[`Breathe in and let your belly drop as you gently lift your chest and tailbone.`,`Breathe out and round your back toward the ceiling, tucking your chin and tailbone.`,`Move slowly, letting your breath lead.`],mistakes:[`Forcing a bigger arch than feels good.`,`Rushing: let each breath lead the movement.`],stress:{knees:`moderate`,wrists:`moderate`},video:{youtubeId:`xyNwxiuERXc`,channel:`FIT.nl`},weightKind:`bodyweight`},"figure-four-stretch":{id:`figure-four-stretch`,name:`Figure-4 Stretch`,muscles:`Glutes, hips`,equipment:[],setup:[`Lie on your back with your knees bent and feet flat.`,`Cross one ankle over the opposite knee to make a 4.`],steps:[`Keep your head and shoulders relaxed on the floor.`,`For more stretch, hold behind the lower thigh and draw it gently toward your chest.`,`Hold, breathing slowly, then switch sides.`],mistakes:[`Forcing the knee down.`,`Lifting your head or tensing your shoulders.`,`Stretching into sharp pain or tingling down your leg: stop if that happens.`],stress:{},video:{youtubeId:`PiJ_5AXTLOw`,channel:`Rapid Fitness`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}},"supine-twist":{id:`supine-twist`,name:`Lying Twist`,muscles:`Lower back, hips`,equipment:[],setup:[`Lie on your back with your knees bent and feet flat, arms out to the sides.`],steps:[`Let both knees fall slowly to one side while your shoulders stay on the floor.`,`Hold, breathing slowly, then bring them back and switch sides.`],mistakes:[`Letting the opposite shoulder lift off the floor.`,`Twisting past where it feels good: a pillow under your knees helps.`],stress:{},video:{youtubeId:`mNdJti7ZwKI`,channel:`Vive Health`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}}},r={...e,...t,...n},i={push:{title:`Push — chest, shoulders, triceps`,slots:[{label:`Chest`,options:[`machine-chest-press`,`dumbbell-bench-press`]},{label:`Shoulders`,options:[`machine-shoulder-press`,`seated-dumbbell-shoulder-press`]},{label:`Upper chest`,options:[`incline-dumbbell-press`,`cable-fly`,`pec-deck-fly`]},{label:`Triceps`,options:[`cable-tricep-pushdown`,`overhead-cable-extension`,`assisted-dip`]},{label:`Side shoulders`,options:[`dumbbell-lateral-raise`]},{label:`Chest squeeze`,options:[`pec-deck-fly`,`cable-fly`]}]},pull:{title:`Pull — back, biceps`,slots:[{label:`Upper back`,options:[`lat-pulldown`,`assisted-pullup`]},{label:`Mid back`,options:[`chest-supported-row`,`seated-cable-row`]},{label:`Rear shoulders`,options:[`face-pull`,`reverse-pec-deck`]},{label:`Biceps`,options:[`dumbbell-curl`,`cable-curl`]},{label:`Second back`,options:[`seated-cable-row`,`assisted-pullup`,`chest-supported-row`]},{label:`Biceps & forearms`,options:[`hammer-curl`,`cable-curl`]}]},legs:{title:`Legs + Abs`,slots:[{label:`Thighs`,options:[`leg-press`,`barbell-back-squat`,`goblet-squat`]},{label:`Glutes`,options:[`glute-bridge`,`dumbbell-romanian-deadlift`]},{label:`Hamstrings`,options:[`seated-leg-curl`,`dumbbell-romanian-deadlift`]},{label:`Core`,options:[`dead-bug`,`pallof-press`]},{label:`Outer glutes`,options:[`hip-abduction`]},{label:`Abs`,options:[`pallof-press`,`side-plank`,`cable-crunch`]},{label:`Front thighs`,options:[`leg-extension`]}]},home:{title:`At-home abs — no equipment`,slots:[{label:`Deep core`,options:[`home-dead-bug`]},{label:`Back side`,options:[`bird-dog`]},{label:`Front core`,options:[`forearm-plank`,`home-dead-bug`]},{label:`Obliques`,options:[`home-side-plank`]},{label:`Hips`,options:[`home-glute-bridge`]},{label:`Lower abs`,options:[`bicycle-crunch`,`forearm-plank`]},{label:`Challenge`,options:[`mountain-climber`,`bicycle-crunch`]}]},mobility:{title:`Mobility reset — neck, upper back, hips`,slots:[{label:`Neck`,options:[`chin-tuck`]},{label:`Upper back`,options:[`open-book`]},{label:`Shoulders`,options:[`wall-slide`]},{label:`Spine`,options:[`cat-cow`,`supine-twist`]},{label:`Hips`,options:[`figure-four-stretch`]},{label:`Lower back`,options:[`supine-twist`,`cat-cow`]}]}};function a(e){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}function o(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function s(e){let t=new Date(e);return t.setHours(0,0,0,0),t.setDate(t.getDate()-(t.getDay()+6)%7),t}var c=[`push`,`pull`,`legs`,`home`,`mobility`],l=[`push`,`pull`,`legs`,`home`],u=[`push`,`pull`,`legs`],d={new:4,some:5,experienced:7},f=`Pick a weight where the last 2 reps feel hard but your form stays clean.`,p={"lean-muscle":{new:{sets:3,repMin:10,repMax:12,restSeconds:90,tip:f},some:{sets:3,repMin:8,repMax:12,restSeconds:90,tip:f},experienced:{sets:4,repMin:8,repMax:12,restSeconds:90,tip:`Take the last set close to failure with good form.`}},strength:{new:{sets:3,repMin:8,repMax:10,restSeconds:120,tip:`Learn the movement before going heavy.`},some:{sets:4,repMin:6,repMax:8,restSeconds:120,tip:f},experienced:{sets:4,repMin:5,repMax:6,restSeconds:150,tip:f}},general:{new:{sets:2,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},some:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},experienced:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Keep rests short.`}}};function m(e){return`${e.sets} sets of ${e.repMin}–${e.repMax} reps, resting about ${e.restSeconds} seconds between sets. ${e.tip}`}function h(e,t){return e.timedSeconds?{...e.timedSeconds,unit:`seconds`}:{min:t.repMin,max:t.repMax,unit:`reps`}}var g={new:{sets:2,repMin:10,repMax:12,restSeconds:45,tip:`Go slowly: quality matters more than speed.`},some:{sets:3,repMin:10,repMax:15,restSeconds:45,tip:`Go slowly and keep your lower back steady.`},experienced:{sets:3,repMin:12,repMax:20,restSeconds:30,tip:`Keep tension in your abs the whole time.`}},_={sets:2,repMin:8,repMax:10,restSeconds:15,tip:`Move slowly and stop short of any pain.`},v=`One light set of your first exercise at about half your usual weight.`,y={mobility:[`Take 5 slow breaths: in through your nose, out through your mouth, shoulders relaxed.`],home:[`Cat-cow on the floor: 10 slow reps, staying in a pain-free range.`,`Pelvic tilts: on your back with knees bent, gently flatten your lower back to the floor and release, 10 reps.`],push:[`Arm circles: 10 forward, then 10 backward.`,`Wall slides: stand with your back to a wall and slowly slide your arms up and down, 10 reps.`,v],pull:[`Arm circles: 10 forward, then 10 backward.`,`Shoulder rolls: 10 slow rolls backward.`,v],legs:[`Leg swings: hold onto something steady and swing each leg forward and back 10 times, then side to side 10 times.`,`Hip circles: hands on hips, 10 slow circles each way.`,`Bodyweight glute bridges: 10 slow reps on a mat.`,v]},b={mobility:[`Lie on your back with your knees bent and take 5 slow, deep belly breaths.`],home:[`Child's pose: sit back on your heels with your arms reaching forward and breathe slowly for 30 seconds.`,`Lying twist: on your back, let both knees fall to one side for 20–30 seconds. Each side.`,`Slow breathing: lie on your back and take 5 slow, deep belly breaths.`],push:[`Doorway chest stretch: forearm on a door frame or post, step through until you feel your chest stretch. Each side.`,`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,`Overhead triceps stretch: reach one hand down your back and gently press the elbow with the other hand. Each side.`],pull:[`Lat stretch: hold a post at chest height and sit your hips back until you feel it along your side.`,`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,`Biceps stretch: palm flat on a wall behind you at shoulder height, then turn your body away. Each side.`],legs:[`Lying hamstring stretch: on your back, lift one straight leg and hold behind the thigh. Each side.`,`Figure-4 glute stretch: on your back, cross one ankle over the other knee and pull the bottom leg in. Each side.`,`Lying quad stretch: on your side, hold your top ankle and bring your heel toward you, only as far as is comfortable. Each side.`]},x={neckUpperBack:[`Gentle neck stretch: tilt one ear toward your shoulder without pulling. Each side.`],lowerBack:[`Knees to chest: on your back, hug both knees in gently and breathe slowly.`]},S={neckUpperBack:[`Chin tucks: sit tall and gently slide your chin straight back, 10 slow reps.`,`Open books: lie on your side, knees bent, and slowly rotate your top arm open, 8 per side.`],lowerBack:[`Cat-cow on a mat: slowly round and arch your back, 10 reps, staying in a pain-free range.`],knees:[`Keep the bike seat high enough that your knee is only slightly bent at the bottom.`]},C={knees:`Go easy on your knees: use a shorter range and stop before any knee pain.`,lowerBack:`Go easy on your lower back: keep it pressed against the pad and lift lighter.`,neckUpperBack:`Go easy on your neck: keep your shoulders down and your head still.`,feet:`Go easy on your feet: keep your whole foot flat and wear supportive shoes.`,shoulders:`Go easy on your shoulders: use a smaller range and lighter weight.`,wrists:`Go easy on your wrists: keep them straight, not bent back.`};function w(e,t){return e.equipment.every(e=>t.has(e))}function T(e,t){return t.filter(t=>e.stress[t]===`moderate`)}function E(e,t){return t.some(t=>e.stress[t]===`high`)}function D(e,t,n,i){return e.options.map(e=>r[e]).filter(e=>!i.has(e.id)&&!t.avoidedExerciseIds.includes(e.id)).filter(e=>w(e,n)).filter(e=>!E(e,t.protectedAreas)).sort((e,n)=>T(e,t.protectedAreas).length-T(n,t.protectedAreas).length).map(n=>({exercise:n,slot:e,cautionAreas:T(n,t.protectedAreas)}))}function ee(e,t,n,r){return D(e.slot,t,new Set(n),new Set([...r,e.exercise.id]))}function O(e,t,n){return e===`mobility`?y.mobility:e===`home`?[`2 minutes of marching in place to warm up.`,...t.protectedAreas.includes(`neckUpperBack`)?S.neckUpperBack??[]:[],...y.home]:[n?`5 minutes on the stationary bike at an easy pace.`:`5 minutes of brisk walking to warm up.`,...t.protectedAreas.flatMap(e=>S[e]??[]),...y[e]]}function k(e,t){return e===`home`?g[t.experience]:e===`mobility`?_:p[t.goal][t.experience]}function te(e,t){return e===`mobility`?b.mobility:[...b[e],...t.protectedAreas.flatMap(e=>x[e]??[])]}function ne(e,t,n){let r=new Set(n),a=i[e],o=e===`mobility`?a.slots.length:d[t.experience],s=a.slots.slice(0,o),c=new Set,l=[];for(let e of s){let[n]=D(e,t,r,c);n&&(c.add(n.exercise.id),l.push(n))}let u=O(e,t,r.has(`bike`)),f=te(e,t);return{day:e,title:a.title,prescription:k(e,t),warmUp:u,exercises:l,coolDown:f}}var A={push:`Push`,pull:`Pull`,legs:`Legs + Abs`,home:`At-home abs`,mobility:`Mobility reset`},re={push:`Push`,pull:`Pull`,legs:`Legs`,home:`Home`,mobility:`Reset`};function ie(e){return u.includes(e)}function ae(e){return ie(e)?`Day ${u.indexOf(e)+1}`:`No gym`}function oe(e){return ie(e)?`${ae(e)} ${A[e]}`:A[e]}function se(e,t){return ie(e)?`${ae(e)} · ${t}`:t}function ce(e,t,n=c){return`<nav class="day-tabs" aria-label="${t}">${n.map(t=>`
      <button type="button" class="day-tab${t===e?` active`:``}" data-day="${t}" aria-pressed="${t===e}">
        <small class="day-number">${ae(t)}</small>${A[t]}
      </button>`).join(``)}</nav>`}function le(e){return`https://www.youtube.com/watch?v=${e}`}function j(e,t=``){return`<ul class="${t}">${e.map(e=>`<li>${e}</li>`).join(``)}</ul>`}function ue(e){return e.cautionAreas.map(e=>`<p class="caution">${C[e]}</p>`).join(``)}function de(e){let{exercise:t}=e,n=e=>`<ol>${e.map(e=>`<li>${e}</li>`).join(``)}</ol>`;return`
    <h3>Set up</h3>
    ${n(t.setup)}
    <h3>How to do it</h3>
    ${n(t.steps)}
    <h3>Avoid</h3>
    ${j(t.mistakes,`mistakes`)}
    <a class="demo-link" href="${le(t.video.youtubeId)}" target="_blank" rel="noopener noreferrer">
      Watch the demo video ↗<small>by ${t.video.channel}</small>
    </a>
  `}function M(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function fe(e){let t=Math.floor(e/60),n=e%60;return`${t}:${String(n).padStart(2,`0`)}`}var pe=`https://ashnasahni.github.io/gym-guide/`,N={time:`18:00`,minutes:60},me=[30,45,60,90,120],he=[`MO`,`TU`,`WE`,`TH`,`FR`,`SA`,`SU`];function ge(e){return/^([01]\d|2[0-3]):[0-5]\d$/.test(e)}function _e(e){return{time:e?.time!==void 0&&ge(e.time)?e.time:N.time,minutes:e?.minutes!==void 0&&me.includes(e.minutes)?e.minutes:N.minutes}}function P(e){return String(e).padStart(2,`0`)}function ve(e){return`${`${e.getFullYear()}${P(e.getMonth()+1)}${P(e.getDate())}`}T${P(e.getHours())}${P(e.getMinutes())}00`}function ye(e){return`${`${e.getUTCFullYear()}${P(e.getUTCMonth()+1)}${P(e.getUTCDate())}`}T${P(e.getUTCHours())}${P(e.getUTCMinutes())}${P(e.getUTCSeconds())}Z`}function be(e){return e.replace(/\\/g,`\\\\`).replace(/;/g,`\\;`).replace(/,/g,`\\,`).replace(/\r?\n/g,`\\n`)}function xe(e){let t=new TextEncoder,n=[],r=``,i=0,a=75;for(let o of e){let e=t.encode(o).length;i+e>a&&(n.push(r),r=``,i=0,a=74),r+=o,i+=e}return n.push(r),n.join(`\r
 `)}function Se(e){return u.includes(e)?`${A[e]} day`:A[e]}function F(e,t,n){let[r,i]=n.split(`:`).map(Number),a=o(e,(t-(e.getDay()+6)%7+7)%7);return a.setHours(r,i,0,0),a<=e?o(a,7):a}function Ce(e,t,n){return[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//Gym Guide//Weekly plan//EN`,`CALSCALE:GREGORIAN`,`METHOD:PUBLISH`,`X-WR-CALNAME:Gym Guide`,...e.flatMap((e,r)=>{if(!e)return[];let a=F(n,r,t.time),o=new Date(a.getTime()+t.minutes*6e4);return[`BEGIN:VEVENT`,`UID:gym-guide-${r}@ashnasahni.github.io`,`DTSTAMP:${ye(n)}`,`DTSTART:${ve(a)}`,`DTEND:${ve(o)}`,`RRULE:FREQ=WEEKLY;BYDAY=${he[r]}`,`SUMMARY:${be(Se(e))}`,`DESCRIPTION:${be(`${i[e].title}\nOpen Gym Guide: ${pe}`)}`,`END:VEVENT`]}),`END:VCALENDAR`].map(xe).join(`\r
`)+`\r
`}function we(e,t){let n=me.map(t=>`<option value="${t}"${t===e.minutes?` selected`:``}>${t} minutes</option>`).join(``);return`
    <section class="card">
      <h2>Add to your calendar</h2>
      <p class="hint">Adds your workout days as weekly repeating events. Tap the button, then open the file it downloads and your calendar app will offer to add them.</p>
      <div class="calendar-fields">
        <label class="calendar-field">
          <span>Start time</span>
          <input type="time" data-field="cal-time" value="${e.time}" />
        </label>
        <label class="calendar-field">
          <span>Length</span>
          <select data-field="cal-minutes">${n}</select>
        </label>
      </div>
      ${t?`<p class="notice">You changed your week. Tap Save profile below first, then add it to your calendar.</p>`:``}
      <button type="button" class="secondary" data-action="add-to-calendar"${t?` disabled`:``}>Add to calendar</button>
      <p class="hint small">This is a one-time copy. If you change your week later, delete the old events in your calendar and add it again. The events repeat every week until you delete them.</p>
    </section>
  `}var Te=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],Ee=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`];function De(e,t,n){let r=a(e),i=s(e),c=new Map;for(let e of n)c.set(a(new Date(e.date)),e.day);return Array.from({length:7},(e,n)=>{let s=o(i,n),l=a(s),u={key:l,date:s,weekdayIndex:n,isToday:l===r},d=c.get(l);if(d)return{...u,status:`done`,workout:d};let f=t[n];return f?l<r?{...u,status:`missed`,workout:f}:{...u,status:`planned`,workout:f}:{...u,status:`rest`,workout:null}})}function Oe(e){return e.toLocaleDateString(void 0,{month:`long`,day:`numeric`})}function ke(e){return e.isToday?`Today`:`${Ee[e.weekdayIndex]}, ${Oe(e.date)}`}function Ae(e){let t=e.status===`done`&&e.workout?`${A[e.workout]} workout, done`:e.status===`planned`&&e.workout?`${A[e.workout]} planned`:e.status===`missed`&&e.workout?`${A[e.workout]} planned, not logged`:`rest day`;return`${Ee[e.weekdayIndex]} ${Oe(e.date)}, ${t}${e.isToday?`, today`:``}`}function je(e,t){return`
    <div class="calendar" role="group" aria-label="This week">${e.map(e=>{let n=e.workout?re[e.workout]:`Rest`,r=e.status===`done`?`✓`:e.status===`missed`?`○`:``;return`
        <button type="button" class="${[`cal-day`,`cal-${e.status}`,e.isToday?`today`:``,e.key===t?`selected`:``].filter(Boolean).join(` `)}" data-date="${e.key}"
                aria-pressed="${e.key===t}" aria-label="${Ae(e)}">
          <span class="cal-weekday">${Te[e.weekdayIndex]}</span>
          <span class="cal-date">${e.date.getDate()}</span>
          <span class="cal-label">${n}</span>
          <span class="cal-mark" aria-hidden="true">${r}</span>
        </button>`}).join(``)}</div>
    <p class="cal-legend">✓ done · ○ not logged · orange outline = today · tap a day to see it</p>
  `}function Me(e,t,n,r){return`
    <section class="card home-card">
      <h2>${e} <small>optional</small></h2>
      <p class="home-blurb">${t}</p>
      ${r?`<button type="button" class="secondary" data-day="${n}">Do ${A[n].toLowerCase()}</button>`:`<p class="hint">You can start it on the day.</p>`}
    </section>`}function Ne(e){return`
    <section class="card">
      <p>Rest day. Your muscles grow while you recover, so a walk or some stretching is plenty.</p>
    </section>

    ${Me(`At-home abs`,`About 10 minutes, no equipment, gentle on your back and knees. Same voice and timer as a gym workout.`,`home`,e.isToday)}

    ${Me(`Mobility reset`,`About 8 minutes of slow stretches for your neck, upper back and hips. No equipment.`,`mobility`,e.isToday)}

    ${e.isToday?`<section class="card">
             <p class="picker-hint">Want a gym workout instead?</p>
             ${ce(null,`Pick a gym workout for today`,u)}
           </section>`:``}`}function Pe(e){let t=[{value:`rest`,label:`Rest`,spoken:`Rest`},...l.map(e=>({value:e,label:re[e],spoken:A[e]}))];return`<div class="plan-editor">${Ee.map((n,r)=>{let i=e[r]??`rest`;return`
      <div class="plan-row">
        <span class="plan-day">${n}</span>
        <div class="plan-options">${t.map(e=>`
          <button type="button" class="plan-option${e.value===i?` active`:``}"
                  data-plan-day="${r}" data-plan-workout="${e.value}"
                  aria-pressed="${e.value===i}" aria-label="${n}: ${e.spoken}">${e.label}</button>`).join(``)}</div>
      </div>`}).join(``)}</div>`}var Fe=[{id:`dumbbells`,name:`Dumbbells`,hint:`Rack of free weights`},{id:`bench`,name:`Adjustable bench`,hint:`Flat or tilted bench`},{id:`mat`,name:`Floor mat`,hint:`Stretching / ab area`},{id:`cable`,name:`Cable machine`,hint:`Pulley tower with handles`},{id:`lat-pulldown`,name:`Lat pulldown`,hint:`Seated, pull a bar down`},{id:`seated-row`,name:`Seated cable row`,hint:`Seated, pull a handle in`},{id:`chest-press`,name:`Chest press machine`,hint:`Seated, push handles forward`},{id:`shoulder-press`,name:`Shoulder press machine`,hint:`Seated, push handles up`},{id:`pec-deck`,name:`Pec deck / rear delt fly`,hint:`Seated, arms swing together`},{id:`assisted-pullup`,name:`Assisted pull-up / dip`,hint:`Kneel on a pad that helps lift you`},{id:`leg-press`,name:`Leg press`,hint:`Seated, push a platform with your feet`},{id:`leg-curl`,name:`Leg curl machine`,hint:`Bend knees against a pad`},{id:`leg-extension`,name:`Leg extension machine`,hint:`Straighten knees against a pad`},{id:`hip-abduction`,name:`Hip abduction machine`,hint:`Seated, push knees outward`},{id:`squat-rack`,name:`Squat rack + barbell`,hint:`Barbell resting on hooks`},{id:`bike`,name:`Stationary bike`,hint:`For warm-ups`}],I=Fe.map(e=>e.id),Ie=0;function Le(e,t){if(!(`speechSynthesis`in window))return;window.speechSynthesis.cancel();let n=new SpeechSynthesisUtterance(e);n.rate=1;let r=++Ie;n.onstart=()=>t?.onStart();let i=()=>{r===Ie&&t?.onEnd()};n.onend=i,n.onerror=i,window.speechSynthesis.speak(n)}function Re(e,t,n){let r=URL.createObjectURL(new Blob([n],{type:t})),i=document.createElement(`a`);i.href=r,i.download=e,document.body.appendChild(i),i.click(),i.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),1e4)}function ze(e){`vibrate`in navigator&&navigator.vibrate(e)}var L=null,Be=!1;async function R(){if(`wakeLock`in navigator&&document.visibilityState===`visible`)try{L=await navigator.wakeLock.request(`screen`)}catch{L=null}}document.addEventListener(`visibilitychange`,()=>{Be&&document.visibilityState===`visible`&&R()});function z(e){Be=e,e?R():(L?.release(),L=null)}var B={waterGoal:8,proteinGoal:null,calorieGoal:null,days:{}},Ve=6e3,V=3e3,He=[{name:`2 eggs`,grams:12},{name:`Chicken breast (palm-size)`,grams:30},{name:`Greek yogurt (1 cup)`,grams:20},{name:`Protein shake (1 scoop)`,grams:25},{name:`Paneer (100 g)`,grams:18},{name:`Tofu (half block)`,grams:20},{name:`Dal / lentils (1 cup)`,grams:18},{name:`Milk (1 glass)`,grams:8}],Ue=[{name:`2 eggs`,kcal:140},{name:`Roti (1)`,kcal:100},{name:`Rice (1 cup cooked)`,kcal:205},{name:`Dal / lentils (1 cup)`,kcal:230},{name:`Banana`,kcal:105},{name:`Greek yogurt (1 cup)`,kcal:130},{name:`Paneer (100 g)`,kcal:265},{name:`Chicken breast (palm-size)`,kcal:165},{name:`Protein shake (1 scoop)`,kcal:120},{name:`Peanut butter (2 tbsp)`,kcal:190},{name:`Oats (1 cup cooked)`,kcal:150},{name:`Milk (1 glass)`,kcal:150}];function H(e,t){let n=e.days[t]??{};return{glasses:n.glasses??0,protein:n.protein??[],calories:n.calories??[]}}function U(e,t,n){return{...e,days:{...e.days,[t]:n}}}function We(e,t,n){let r=H(e,t);return U(e,t,{...r,glasses:Math.max(0,r.glasses+n)})}function Ge(e,t,n){let r=H(e,t);return U(e,t,{...r,protein:[...r.protein,n]})}function Ke(e,t,n){let r=H(e,t);return U(e,t,{...r,protein:r.protein.filter((e,t)=>t!==n)})}function qe(e,t,n){let r=H(e,t);return U(e,t,{...r,calories:[...r.calories,n]})}function Je(e,t,n){let r=H(e,t);return U(e,t,{...r,calories:r.calories.filter((e,t)=>t!==n)})}function Ye(e){return e.calories.reduce((e,t)=>e+t.kcal,0)}function Xe(e,t){if(e.trim()===``)return`Type what you ate.`;let n=Number(t);return t.trim()===``||!Number.isInteger(n)||n<=0||n>V?`Enter the calories as a whole number, between 1 and ${V}.`:null}function Ze(e){let t=Number(e);return e.trim()===``||!Number.isInteger(t)||t<500||t>6e3?`Enter a calorie goal as a whole number, between 500 and ${Ve}.`:null}function Qe(e){return e.protein.reduce((e,t)=>e+t.grams,0)}function $e(e,t){if(e.trim()===``)return`Type what you ate.`;let n=Number(t);return t.trim()===``||!Number.isFinite(n)||n<=0||n>300?`Enter the protein in grams, between 1 and 300.`:null}var et={name:``,grams:``,goal:``,error:``,calorieName:``,calories:``,calorieGoal:``,calorieError:``};function tt(e,t){return`<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${e}">
    <div class="meter-fill" style="width: ${Math.min(100,Math.round(e/t*100))}%"></div>
  </div>`}function nt(e,t){let n=e.waterGoal;return`
    <section class="card">
      <h2>Water</h2>
      <p class="fuel-total"><strong>${t}</strong> of ${n} glasses${t>=n?` — goal reached!`:``}</p>
      ${tt(t,n)}
      <div class="button-row fuel-buttons">
        <button type="button" class="secondary" data-action="water" data-delta="-1" ${t===0?`disabled`:``} aria-label="Remove a glass">−1</button>
        <button type="button" class="primary" data-action="water" data-delta="1">+1 glass</button>
      </div>
      <div class="goal-row">
        <span>Daily goal</span>
        <button type="button" class="step-button small" data-action="water-goal" data-delta="-1" aria-label="Lower water goal">−</button>
        <span>${n} glasses</span>
        <button type="button" class="step-button small" data-action="water-goal" data-delta="1" aria-label="Raise water goal">+</button>
      </div>
    </section>
  `}function rt(e){return`
    <p class="hint">Set a daily goal to see how close you are. A common target for building muscle is about 0.7 g of protein per pound of body weight; a doctor or dietitian can tell you what's right for you.</p>
    <div class="inline-form">
      <input type="number" inputmode="numeric" min="1" placeholder="e.g. 100" value="${M(e.goal)}" data-field="protein-goal" aria-label="Daily protein goal in grams" />
      <span>g</span>
      <button type="button" class="secondary" data-action="set-protein-goal">Set goal</button>
    </div>
  `}function it(e,t,n){let r=H(e,t),i=Qe(r),a=e.proteinGoal;return`
    <section class="card">
      <h2>Protein</h2>
      ${a===null?`<p class="fuel-total"><strong>${i}</strong> g today</p>`:`<p class="fuel-total"><strong>${i}</strong> of ${a} g${i>=a?` — goal reached!`:``}</p>${tt(i,a)}`}
      ${r.protein.length===0?`<p class="hint">Nothing logged yet today. Tap a food below to add it.</p>`:`<ul class="entry-list">${r.protein.map((e,t)=>`
          <li>
            <span>${M(e.name)}</span>
            <span class="entry-grams">${e.grams} g</span>
            <button type="button" class="link-button" data-action="remove-protein" data-index="${t}" aria-label="Remove ${M(e.name)}">Remove</button>
          </li>`).join(``)}</ul>`}

      <h3>Quick add</h3>
      <div class="quick-grid">${He.map((e,t)=>`
      <button type="button" class="chip quick-food" data-action="quick-protein" data-index="${t}">
        <span>${e.name}</span><small>~${e.grams} g</small>
      </button>`).join(``)}</div>
      <p class="hint small">Amounts are rough averages for a typical serving.</p>

      <h3>Something else</h3>
      <div class="inline-form">
        <input type="text" placeholder="What you ate" value="${M(n.name)}" data-field="protein-name" aria-label="Food name" maxlength="60" />
        <input type="number" inputmode="numeric" min="1" placeholder="g" value="${M(n.grams)}" data-field="protein-grams" aria-label="Protein in grams" class="grams-input" />
        <button type="button" class="secondary" data-action="add-protein">Add</button>
      </div>
      ${n.error?`<p class="form-error" role="alert">${n.error}</p>`:``}

      ${a===null?rt(n):`<button type="button" class="link-button" data-action="clear-protein-goal">Change protein goal (${a} g)</button>`}
    </section>
  `}function at(e){return`
    <p class="hint">Set a daily goal to see how close you are. How much to eat depends on your body and goals; a doctor or dietitian can tell you what's right for you.</p>
    <div class="inline-form">
      <input type="number" inputmode="numeric" min="1" placeholder="e.g. 2400" value="${M(e.calorieGoal)}" data-field="calorie-goal" aria-label="Daily calorie goal" />
      <span>cal</span>
      <button type="button" class="secondary" data-action="set-calorie-goal">Set goal</button>
    </div>
  `}function ot(e,t,n){let r=H(e,t),i=Ye(r),a=e.calorieGoal;return`
    <section class="card">
      <h2>Calories</h2>
      ${a===null?`<p class="fuel-total"><strong>${i}</strong> cal today</p>`:`<p class="fuel-total"><strong>${i}</strong> of ${a} cal${i>=a?` — goal reached!`:``}</p>${tt(i,a)}`}
      ${r.calories.length===0?`<p class="hint">Nothing logged yet today. Tap a food below to add it.</p>`:`<ul class="entry-list">${r.calories.map((e,t)=>`
          <li>
            <span>${M(e.name)}</span>
            <span class="entry-grams">${e.kcal} cal</span>
            <button type="button" class="link-button" data-action="remove-calories" data-index="${t}" aria-label="Remove ${M(e.name)} calories">Remove</button>
          </li>`).join(``)}</ul>`}

      <h3>Quick add</h3>
      <div class="quick-grid">${Ue.map((e,t)=>`
      <button type="button" class="chip quick-food" data-action="quick-calories" data-index="${t}">
        <span>${e.name}</span><small>~${e.kcal} cal</small>
      </button>`).join(``)}</div>
      <p class="hint small">Amounts are rough averages for a typical serving. Use the box below if you know the real number.</p>

      <h3>Something else</h3>
      <div class="inline-form">
        <input type="text" placeholder="What you ate" value="${M(n.calorieName)}" data-field="calorie-name" aria-label="Food name for calories" maxlength="60" />
        <input type="number" inputmode="numeric" min="1" placeholder="cal" value="${M(n.calories)}" data-field="calorie-amount" aria-label="Calories" class="grams-input" />
        <button type="button" class="secondary" data-action="add-calories">Add</button>
      </div>
      ${n.calorieError?`<p class="form-error" role="alert">${n.calorieError}</p>`:``}

      ${a===null?at(n):`<button type="button" class="link-button" data-action="clear-calorie-goal">Change calorie goal (${a} cal)</button>`}
    </section>
  `}function st(e,t,n){return`
    <header class="screen-header">
      <h1>Fuel</h1>
      <p class="lead">Water, protein and calories help your muscles recover and grow. Today's log resets at midnight.</p>
    </header>
    ${nt(e,H(e,t).glasses)}
    ${it(e,t,n)}
    ${ot(e,t,n)}
  `}var ct=`CC BY 4.0`,lt=`https://creativecommons.org/licenses/by/4.0/`,W=`https://freemusicarchive.org/music`,ut={file:`punjabi-bhangra.mp3`,title:`Punjabi Bhangra Energy Short Burst`,artist:`Alex Morgan`,source:`${W}/alex-morgan/kids-comedy-holiday/punjabi-bhangra-energy-short-burst/`},dt={file:`boom-bap.mp3`,title:`Boom Bap Old School Hip-Hop Beat`,artist:`Alex Morgan`,source:`${W}/alex-morgan/trap-hip-hop-beats/boom-bap-old-school-hip-hop-beat/`},ft={file:`electronic-dance.mp3`,title:`Energetic Upbeat Electronic Dance`,artist:`Music for Creators`,source:`${W}/fretbound/single/energetic-upbeat-electronic-dance/`},pt={file:`energetic-pop.mp3`,title:`Energetic Pop Background`,artist:`AurosonMusic`,source:`${W}/aurosonmusic/single/energetic-pop-background/`},mt={file:`bright-pop.mp3`,title:`Bright Energetic Upbeat Pop`,artist:`Music for Creators`,source:`${W}/fretbound/single/bright-energetic-upbeat-pop/`},ht={file:`disco-funk.mp3`,title:`Mirrorglow (Upbeat & Energetic Disco Funk)`,artist:`Vlad Annenkov`,source:`${W}/vlad-annenkov/single/upbeat-energetic-disco-funk-mirrorglowmp3/`},gt={file:`pop-rock.mp3`,title:`Neon Pulse (Energetic Pop Rock)`,artist:`Vlad Annenkov`,source:`${W}/vlad-annenkov/single/energetic-pop-rock-neon-pulsemp3/`},_t={file:`hype-trap.mp3`,title:`Hard Hype Trap for Sports Intros`,artist:`Alex Morgan`,source:`${W}/alex-morgan/trap-hip-hop-beats/hard-hype-trap-for-sports-intros/`},vt={file:`phonk-gym.mp3`,title:`Hard Phonk Gym Workout Track`,artist:`Alex Morgan`,source:`${W}/alex-morgan/phonk-drift/hard-phonk-gym-workout-track/`},yt={file:`workout-edm.mp3`,title:`Workout Songs`,artist:`Alex Morgan`,source:`${W}/alex-morgan/epic-action-sports/workout-songs/`},bt={file:`masala-madness.mp3`,title:`Masala Madness`,artist:`Geoff Harvey - Purple Planet Music`,source:`${W}/geoff-harvey-purple-planet-music/indian-life/masala-madness-1/`},xt={file:`mumbai-mood.mp3`,title:`Mumbai Mood`,artist:`Geoff Harvey - Purple Planet Music`,source:`${W}/geoff-harvey-purple-planet-music/indian-life/mumbai-mood-1/`},St={file:`bollywood-flame.mp3`,title:`Bollywood Flame With Bright Festive Drive`,artist:`Alex Morgan`,source:`${W}/alex-morgan/advertising-broadcast-vol-2/bollywood-flame-with-bright-festive-drive/`},Ct={file:`weekend-chill.mp3`,title:`Chill Hip Hop - Weekend Chill Beat`,artist:`AurosonMusic`,source:`${W}/aurosonmusic/single/chill-hip-hop-weekend-chill-beat/`},G={push:{name:`Push day mix`,songs:[_t,ut,bt,dt,ft,ht,yt]},pull:{name:`Pull day mix`,songs:[vt,xt,ft,ut,gt,bt,pt]},legs:{name:`Legs day mix`,songs:[_t,bt,dt,ut,vt,ht,yt]},home:{name:`At-home abs mix`,songs:[mt,xt,pt,St,ft,yt]},mobility:{name:`Mobility mix`,songs:[Ct]}};function wt(){let e=new Map;for(let t of Object.values(G))for(let n of t.songs)e.set(n.file,n);return[...e.values()]}function Tt(e){return new URL(`music/${e.file}`,document.baseURI).href}var Et=.3,Dt=8e3;function Ot(e,t,n=()=>new Audio){let r=null,i=null,a=0,o=0,s=null,c;function l(e,t){if(!r)return;let n=G[e].songs;a=t%n.length,r.src=Tt(n[a]),r.play().catch(()=>u(`Couldn't play the music. Check your connection and try again.`))}function u(e){i!==null&&(f(),t(e))}function d(){i!==null&&l(i,a+1)}function f(){window.clearTimeout(c),r&&=(r.pause(),null),i=null,s=null,o=0,e()}function p(){window.clearTimeout(c),r&&s!==null&&(r.volume=s,s=null)}function m(t){if(r&&i===t){r.play().catch(()=>u(`Couldn't play the music. Check your connection and try again.`));return}r?.pause(),r=n(),r.addEventListener(`ended`,d),r.addEventListener(`playing`,()=>{o=0}),r.addEventListener(`error`,()=>{o+=1,o>=G[t].songs.length?u(`The music couldn't load. Check your connection and try again.`):d()}),i=t,o=0,s=null,l(t,0),e()}return{play:m,stop:f,current:()=>i,duck(){r&&s===null&&(s=r.volume,r.volume=s*Et,c=window.setTimeout(p,Dt))},restore:p}}var kt=`gym-guide-music`;function At(e){return{async savedCount(){let t=await e.open(kt),n=0;for(let e of wt())await t.match(Tt(e))&&(n+=1);return n},async save(t){navigator.storage?.persist?.().catch(()=>!1);let n=await e.open(kt),r=0;for(let e of wt()){let i=Tt(e);if(!await n.match(i)){let t=await fetch(i,{cache:`reload`});if(!t.ok)throw Error(`${e.file} could not be downloaded (${t.status})`);await n.put(i,t)}r+=1,t(r)}},async remove(){await e.delete(kt)}}}var jt=70;function Mt(e,t){if(e.kind===`checking`)return``;let n;return n=e.kind===`saved`?`
      <p class="music-status">✓ All ${t} songs are saved on this phone.</p>
      <button type="button" class="link-button" data-action="remove-music-offline">Remove saved music</button>`:e.kind===`saving`?`
      <p class="fuel-total" role="status">Saving song ${Math.min(e.done+1,t)} of ${t}…</p>
      <div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${e.done}">
        <div class="meter-fill" style="width: ${Math.round(e.done/t*100)}%"></div>
      </div>
      <p class="hint small">Keep this screen open until it finishes.</p>`:`
      ${e.saved>0?`<p class="hint">${e.saved} of ${t} songs are saved so far.</p>`:``}
      ${e.kind===`error`?`<p class="form-error" role="alert">${M(e.message)}</p>`:``}
      <button type="button" class="secondary" data-action="save-music-offline">${e.saved>0?`Finish saving the music`:`Save music for offline use`}</button>
      <p class="hint small">Uses about ${jt} MB on this phone. Do it on Wi-Fi.</p>`,`
    <section class="card offline-music">
      <h2>Music offline</h2>
      <p class="hint">Songs play from the internet. Save them on this phone to listen at the gym without signal.</p>
      ${n}
    </section>`}function Nt(e,t){let n=G[e],r=n.songs.length,i=t===e?`<p class="music-status">♪ Playing now</p>
         <button type="button" class="secondary" data-action="stop-music">Stop music</button>`:`<button type="button" class="secondary" data-action="play-music" data-workout="${e}">▶ Play ${n.name}</button>`;return`
    <section class="card music-card">
      <h2>Music</h2>
      <p class="music-name">${n.name} · ${r} ${r===1?`song`:`songs`}</p>
      ${i}
      <p class="hint small">Plays in the background and keeps going while you move around the app.</p>
    </section>`}function Pt(e,t){let n=G[e],r=t===e,i=r?`<button type="button" class="secondary" data-action="stop-music" aria-label="Stop music">■ Stop</button>`:`<button type="button" class="secondary" data-action="play-music" data-workout="${e}" aria-label="Play ${n.name}">▶ Play</button>`;return`
    <section class="card music-card music-row">
      <div>
        <h2>Music</h2>
        <p class="music-name">${r?`♪ Playing now`:n.name}</p>
      </div>
      ${i}
    </section>`}function Ft(){return`
    <details class="card music-credits">
      <summary>Music credits</summary>
      <ul>${wt().map(e=>`<li><a href="${e.source}" target="_blank" rel="noopener noreferrer">${M(e.title)}</a> by ${M(e.artist)}</li>`).join(``)}</ul>
      <p class="hint small">From the Free Music Archive, used under the <a href="${lt}" target="_blank" rel="noopener noreferrer">${ct}</a> license. The songs by Alex Morgan are listed there as AI-generated.</p>
    </details>`}var It=[{id:`lean-muscle`,label:`Build lean muscle`,detail:`Gain muscle for a toned look`},{id:`strength`,label:`Get stronger`,detail:`Lift heavier, fewer reps`},{id:`general`,label:`General fitness`,detail:`Lighter, steady routine`}],Lt=[{id:`new`,label:`New to lifting`},{id:`some`,label:`Some experience`},{id:`experienced`,label:`Experienced`}],Rt=[{id:`knees`,label:`Knees`},{id:`lowerBack`,label:`Lower back`},{id:`neckUpperBack`,label:`Neck / upper back`},{id:`feet`,label:`Feet / ankles`},{id:`shoulders`,label:`Shoulders`},{id:`wrists`,label:`Wrists`}],K={goal:`lean-muscle`,experience:`new`,protectedAreas:[],avoidedExerciseIds:[],weekPlan:[`push`,null,`pull`,null,`legs`,null,null]};function zt(e){let t=[null,null,null,null,null,null,null];return[...e].filter(e=>Number.isInteger(e)&&e>=0&&e<=6).sort((e,t)=>e-t).forEach((e,n)=>{t[e]=u[n%u.length]}),t}function Bt(e){let{gymDays:t,...n}=e,r={...K,...n};if(!n.weekPlan&&Array.isArray(t)){let e=zt(t);e.some(Boolean)&&(r.weekPlan=e)}return r}var q=5;function Vt(e,t){let n=e[t];return n?.[n.length-1]}function J(e,t){let n=e.sets.map(e=>e.amount).join(`, `),r=e.sets[e.sets.length-1]?.weight,i=t===`seconds`?` sec`:` reps`;return r==null?`${n}${i}`:`${r} lb × ${n}${i}`}function Ht(e,t,n,r={}){if(!e||e.sets.length===0)return{weight:null,message:n===`bodyweight`?`First time: aim for ${t.min}–${t.max} ${t.unit}.`:`First time: start light. Find a weight where the last 2 reps feel hard but your form stays clean.`};let i=e.sets.every(e=>e.amount>=t.max),a=e.sets.reduce((e,t)=>e+t.amount,0)/e.sets.length<t.min-2,o=e.sets[e.sets.length-1].weight;if(n===`bodyweight`||o===null)return{weight:null,message:i?`You hit ${t.max} on every set. Try a couple more ${t.unit} each set.`:`Aim for ${t.max} ${t.unit} on every set.`};let s=n===`assist`?Math.max(0,o-q):o+q,c=n===`assist`?o+q:Math.max(0,o-q);return i?r.holdWeight?{weight:o,message:`Easy day: stay at ${o} lb and keep the reps smooth.`}:{weight:s,message:n===`assist`?`You hit ${t.max} reps every set. Try ${s} lb of help (a little less).`:`You hit ${t.max} reps every set. Try ${s} lb.`}:a?{weight:c,message:`That was heavy. Try ${c} lb and aim for ${t.min}–${t.max} reps.`}:{weight:o,message:`Stay at ${o} lb and aim for ${t.max} reps on every set.`}}function Ut(e,t,n,r){let i=e[t]??[],a=i[i.length-1],o=a&&a.date===n?[...i.slice(0,-1),{...a,sets:[...a.sets,r]}]:[...i,{date:n,sets:[r]}];return{...e,[t]:o}}function Wt(e){let t=new Map;for(let[n,r]of Object.entries(e))for(let e of r){if(e.sets.length===0)continue;let r=t.get(e.date)??{date:e.date,entries:[]};r.entries.push({exerciseId:n,session:e}),t.set(e.date,r)}return[...t.values()].sort((e,t)=>t.date.localeCompare(e.date))}function Gt(e,t){let n=s(t);return Wt(e).filter(e=>new Date(e.date)>=n).length}function Kt(e,t){return e.filter(e=>e.sets.length>0).map(e=>{if(t===`bodyweight`)return Math.max(...e.sets.map(e=>e.amount));let n=e.sets.map(e=>e.weight??0);return t===`assist`?Math.min(...n):Math.max(...n)})}var qt={1:`Wrecked`,2:`Tired`,3:`Okay`,4:`Good`,5:`Great`},Jt=[1,2,3,4,5],Yt=2,Xt=70,Zt=6,Qt=4,$t=85,en=7;function tn(e){return e.feel<=Yt||e.readiness!==null&&e.readiness<Xt||e.hours!==null&&e.hours<Zt?`easy`:e.feel>=Qt&&(e.readiness===null||e.readiness>=$t)&&(e.hours===null||e.hours>=en)?`push`:`normal`}function nn(e){return e===`easy`?`Take it easy today. If you work out, workout mode drops a set from each exercise and keeps your weights where they were. Resting is fine too.`:e===`push`?`You're well recovered, so it's a good day to aim for the top of your rep range. Keep your form clean.`:`A normal day: train as planned.`}function rn(e,t){return t===`easy`?{...e,sets:Math.max(1,e.sets-1)}:e}function an(e){let t=[`Felt ${qt[e.feel].toLowerCase()} (${e.feel}/5)`];return e.hours!==null&&t.push(`slept ${e.hours} h`),e.readiness!==null&&t.push(`readiness ${e.readiness}`),t.join(` · `)}function on(e,t){return e.find(e=>e.date===t)}function sn(e,t){return[...e.filter(e=>e.date!==t.date),t].sort((e,t)=>e.date.localeCompare(t.date)).slice(-180)}function cn(e,t,n){if(e===null||!Jt.includes(e))return{ok:!1,error:`Tap a number for how rested you feel.`};let r=null;if(t.trim()!==``&&(r=Number(t),!Number.isFinite(r)||r<0||r>24))return{ok:!1,error:`Hours slept should be a number between 0 and 24, or leave it blank.`};let i=null;return n.trim()!==``&&(i=Number(n),!Number.isInteger(i)||i<0||i>100)?{ok:!1,error:`Readiness should be a whole number from 0 to 100, or leave it blank.`}:{ok:!0,feel:e,hours:r,readiness:i}}var ln=10;function un(e){return e.timedSeconds?`seconds`:`reps`}function Y(e){return new Date(e).toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`})}function dn(e,t){let n=e.weightKind??`load`;return n===`bodyweight`?`${t} ${e.timedSeconds?`sec`:`reps`}`:n===`assist`?`${t} lb of help`:`${t} lb`}function fn(e,t,n,r){let i={top:22,right:20,bottom:22,left:20},a=Math.min(...n),o=Math.max(...n),s=o-a||1,c=e=>i.left+e*(300-i.left-i.right)/(n.length-1),l=e=>i.top+(o-e)*(110-i.top-i.bottom)/s,u=n.map((e,t)=>`${t===0?`M`:`L`}${c(t).toFixed(1)},${l(e).toFixed(1)}`).join(` `),d=n.map((e,n)=>{let i=`${Y(t[n])}: ${r(e)}`;return`
        <g class="chart-point" data-point="${i}" tabindex="0" role="button" aria-label="${i}">
          <circle cx="${c(n)}" cy="${l(e)}" r="14" class="hit" />
          <circle cx="${c(n)}" cy="${l(e)}" r="4.5" class="dot" />
        </g>`}).join(``);return`
    <svg class="trend-chart" viewBox="0 0 300 110" role="img" aria-label="${e} over time">
      <line x1="${i.left}" x2="${300-i.right}" y1="${110-i.bottom+6}" y2="${110-i.bottom+6}" class="baseline" />
      <path d="${u}" class="trend-line" />
      ${d}
      <text x="${c(0)}" y="${l(n[0])-10}" class="value-label" text-anchor="start">${n[0]}</text>
      <text x="${c(n.length-1)}" y="${l(n[n.length-1])-10}" class="value-label" text-anchor="end">${n[n.length-1]}</text>
      <text x="${i.left}" y="106" class="axis-label">${Y(t[0])}</text>
      <text x="${300-i.right}" y="106" class="axis-label" text-anchor="end">${Y(t[t.length-1])}</text>
    </svg>
    <p class="chart-caption" aria-live="polite">Tap a dot to see that day.</p>
  `}function pn(e){return Object.entries(e).filter(([e,t])=>r[e]&&t.some(e=>e.sets.length>0)).map(([e,t])=>{let n=r[e],i=t.filter(e=>e.sets.length>0),a=Kt(i,n.weightKind??`load`),o=i[i.length-1],s=(n.weightKind??`load`)===`assist`?Math.min(...a):Math.max(...a),c=a.length>=2?fn(n.name,i.map(e=>e.date),a,e=>dn(n,e)):`<p class="hint">Log it again to start a chart.</p>`;return`
        <section class="card progress-card">
          <h3 class="progress-name">${n.name}</h3>
          <p class="progress-stats">
            <span>Best: <strong>${dn(n,s)}</strong></span>
            <span>Last: ${J(o,un(n))}</span>
          </p>
          ${c}
        </section>`}).join(``)}function mn(e){return Wt(e).slice(0,ln).map(e=>{let t=e.entries.filter(({exerciseId:e})=>r[e]).map(({exerciseId:e,session:t})=>{let n=r[e];return`<li>${n.name}: <span class="hint">${J(t,un(n))}</span></li>`}).join(``);return`
        <section class="card">
          <h3 class="progress-name">${Y(e.date)}</h3>
          <ul class="summary">${t}</ul>
        </section>`}).join(``)}function hn(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r,12).toISOString()}function gn(e){if(e.length===0)return``;let t=e.slice(-14),n=t[t.length-1],r=[{name:`How rested you felt`,points:t.map(e=>({date:e.date,value:e.feel})),format:e=>`${qt[e]??e} (${e}/5)`},{name:`Hours slept`,points:t.flatMap(e=>e.hours===null?[]:[{date:e.date,value:e.hours}]),format:e=>`${e} h`},{name:`Readiness`,points:t.flatMap(e=>e.readiness===null?[]:[{date:e.date,value:e.readiness}]),format:e=>String(e)}].filter(e=>e.points.length>=2).map(e=>`
        <section class="card progress-card">
          <h3 class="progress-name">${e.name}</h3>
          ${fn(e.name,e.points.map(e=>hn(e.date)),e.points.map(e=>e.value),e.format)}
        </section>`).join(``);return`
    <h2 class="section-title">Recovery</h2>
    <section class="card">
      <p class="progress-stats"><span>Last check-in (${Y(hn(n.date))}): ${an(n)}</span></p>
      ${r?``:`<p class="hint">Check in on a few more mornings and your charts will appear here.</p>`}
    </section>
    ${r}`}function _n(e,t,n,r){let i=`
    <header class="screen-header">
      <h1>Your progress</h1>
      <p class="lead">Everything here comes from the sets you log in workout mode.</p>
    </header>`;if(Wt(e).length===0)return`${i}
      <section class="card empty">
        <p>No workouts logged yet. Start a workout and save your sets, and your progress will show up here.</p>
        <button type="button" class="secondary" data-nav="today">Go to today's workout</button>
      </section>
      ${gn(r)}`;let a=Gt(e,t);return`${i}
    <section class="card week-card">
      <p class="week-count"><strong>${a}</strong> of ${n}</p>
      <p>workouts this week${a>=n?` — goal reached!`:``}</p>
      <p class="hint">That's the number of workout days in your week plan (change it in Profile). The week starts Monday.</p>
    </section>

    ${gn(r)}

    <h2 class="section-title">Exercises</h2>
    ${pn(e)}

    <h2 class="section-title">Recent workouts</h2>
    ${mn(e)}
  `}var vn={open:!1,feel:null,hours:``,readiness:``,error:``};function yn(e){return`
    <section class="card recovery-card">
      <h2>Morning check-in</h2>
      <p class="feel-question" id="feel-question">How rested do you feel?</p>
      <div class="feel-row" role="group" aria-labelledby="feel-question">${Jt.map(t=>`
      <button type="button" class="feel-option${e.feel===t?` active`:``}" data-action="checkin-feel" data-value="${t}" aria-pressed="${e.feel===t}">
        <strong>${t}</strong><small>${qt[t]}</small>
      </button>`).join(``)}</div>
      <div class="calendar-fields">
        <label class="calendar-field">
          <span>Hours slept <small>(optional)</small></span>
          <input type="number" inputmode="decimal" step="0.5" min="0" max="24" placeholder="7.5" value="${e.hours}" data-field="checkin-hours" />
        </label>
        <label class="calendar-field">
          <span>Readiness <small>(optional)</small></span>
          <input type="number" inputmode="numeric" step="1" min="0" max="100" placeholder="0–100" value="${e.readiness}" data-field="checkin-readiness" />
        </label>
      </div>
      <p class="hint small">Readiness is the score from a ring or watch such as Oura, if you have one. Skip it if you don't.</p>
      ${e.error?`<p class="form-error" role="alert">${e.error}</p>`:``}
      <div class="button-row">
        <button type="button" class="secondary" data-action="checkin-cancel">Cancel</button>
        <button type="button" class="primary" data-action="checkin-save">Save check-in</button>
      </div>
    </section>`}function bn(e,t){if(t.open)return yn(t);if(!e)return`
      <section class="card recovery-card">
        <h2>Morning check-in</h2>
        <p>How recovered are you? It takes ten seconds and tunes today's workout.</p>
        <button type="button" class="secondary" data-action="checkin-open">Check in</button>
      </section>`;let n=tn(e);return`
    <section class="card recovery-card level-${n}">
      <h2>Today's recovery</h2>
      <p class="recovery-summary">${an(e)}</p>
      <p class="recovery-advice">${nn(n)}</p>
      <button type="button" class="link-button" data-action="checkin-open">Change check-in</button>
      <p class="hint small">A training suggestion, not medical advice.</p>
    </section>`}function xn(e,t,n=null){return{day:e.day,startedAt:t.toISOString(),exercises:e.exercises,prescription:rn(e.prescription,n),index:0,setNumber:1,phase:e.exercises.length>0?`lift`:`done`,restEndsAt:null,recoveryLevel:n}}function X(e){return e.exercises[e.index]}function Sn(e){return e.setNumber>=e.prescription.sets}function Cn(e){return e.index>=e.exercises.length-1}function wn(e){return{...e,phase:`log`}}function Tn(e,t){if(Sn(e)&&Cn(e))return{...e,phase:`done`,restEndsAt:null};let n=t+e.prescription.restSeconds*1e3;return Sn(e)?{...e,index:e.index+1,setNumber:1,phase:`rest`,restEndsAt:n}:{...e,setNumber:e.setNumber+1,phase:`rest`,restEndsAt:n}}function En(e){return{...e,phase:`lift`,restEndsAt:null}}function Dn(e,t,n){let r=Math.max(e.restEndsAt??n,n);return{...e,restEndsAt:r+t*1e3}}function On(e){return Cn(e)?{...e,phase:`done`,restEndsAt:null}:{...e,index:e.index+1,setNumber:1,phase:`lift`,restEndsAt:null}}function kn(e,t){let n=e.exercises.map((n,r)=>r===e.index?t:n);return{...e,exercises:n,setNumber:1,phase:`lift`,restEndsAt:null}}function An(e,t){return e.restEndsAt===null?0:Math.max(0,Math.ceil((e.restEndsAt-t)/1e3))}var jn=`gymGuide.v1`;function Mn(){return{profile:null,equipmentIds:[...I],equipmentConfirmed:!1,history:{},session:null,nutrition:B,workoutLog:[],calendar:N,recovery:[]}}function Nn(){try{let e=localStorage.getItem(jn);if(!e)return Mn();let t=JSON.parse(e);return{...Mn(),...t,profile:t.profile?Bt(t.profile):null,nutrition:{...B,...t.nutrition},calendar:_e(t.calendar),recovery:Array.isArray(t.recovery)?t.recovery:[]}}catch{return Mn()}}function Z(e){try{return localStorage.setItem(jn,JSON.stringify(e)),!0}catch{return!1}}function Q(e,t,n){let r=Vt(e,n);return r&&r.date===t.startedAt?r.sets:[]}function Pn(e,t,n){let r=(e[n]??[]).filter(e=>e.date!==t.startedAt);return r[r.length-1]}function Fn(e,t,n){let r=h(n.exercise,t.prescription);return Ht(Pn(e,t,n.exercise.id),r,n.exercise.weightKind??`load`,{holdWeight:t.recoveryLevel===`easy`})}function In(e,t){let n=h(t.exercise,e.prescription);return`${n.min}–${n.max} ${n.unit}`}function $(e){return`Exercise ${e.index+1} of ${e.exercises.length} · ${oe(e.day)}`}function Ln(e,t=!1){return`
    <div class="session-controls">
      <button type="button" class="link-button" data-action="toggle-voice" aria-pressed="${e}">Voice: ${e?`on`:`off`}</button>
      ${t?`<button type="button" class="link-button" data-action="skip-exercise">Skip exercise</button>`:``}
      <button type="button" class="link-button" data-action="end-workout">End workout</button>
    </div>
  `}function Rn(e,t,n,r,i){let a=X(e);if(!a)return``;let o=Pn(t,e,a.exercise.id),s=h(a.exercise,e.prescription),c=Fn(t,e,a),l=Q(t,e,a.exercise.id);return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>${a.exercise.name}</h1>
    </header>

    ${r?`<p class="notice" role="status">${r}</p>`:``}
    ${e.recoveryLevel===`easy`?`<p class="notice">Easy day: fewer sets, and your weights stay where they were.</p>`:``}

    <section class="card set-card">
      <p class="set-label">Set ${e.setNumber} of ${e.prescription.sets}</p>
      <p class="set-target">${In(e,a)}</p>
      ${o?`<p class="last-time">Last time: ${J(o,s.unit)}</p>`:``}
      ${e.setNumber===1?`<p class="suggestion">${c.message}</p>`:``}
      ${l.length>0?`<p class="last-time">Today so far: ${J({date:``,sets:l},s.unit)}</p>`:``}
    </section>

    ${ue(a)}

    <button type="button" class="primary big" data-action="set-done">Set done</button>

    <details class="card how-to">
      <summary>How to do it</summary>
      ${de(a)}
    </details>

    <div class="button-row">
      <button type="button" class="secondary" data-action="open-swap">Swap</button>
      <button type="button" class="secondary" data-action="hurt">This hurt</button>
    </div>
    ${Pt(e.day,i)}
    ${Ln(n,!0)}
  `}function zn(e,t){let n=e.exercises.reduce((n,r)=>n+Q(t,e,r.exercise.id).length,0),r=n>0?`You've logged ${n} ${n===1?`set`:`sets`}. They're saved, and this workout will show as done on your calendar.`:`You haven't logged any sets yet, so nothing will be saved.`;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>End this workout?</h1>
      <p class="lead">${r}</p>
    </header>

    <button type="button" class="primary big" data-action="confirm-end">Yes, end workout</button>
    <button type="button" class="secondary" data-action="cancel-end">Keep going</button>
  `}function Bn(e,t){let n=X(e);if(!n)return``;let r=t.length===0?`<section class="card empty"><p>There's no other exercise for this spot with your gym's equipment. You can skip it instead.</p></section>`:t.map((e,t)=>`
        <button type="button" class="swap-option" data-action="choose-swap" data-index="${t}">
          <strong>${e.exercise.name}</strong>
          <small>${e.exercise.muscles}</small>
          ${e.cautionAreas.length>0?`<small class="swap-caution">Go easy: has a caution for you</small>`:``}
        </button>`).join(``);return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>Swap ${n.exercise.name}</h1>
      <p class="lead">Pick another exercise that works the same muscles. ${n.exercise.name} stays in future workouts.</p>
    </header>

    <div class="swap-list">${r}</div>

    <button type="button" class="secondary" data-action="cancel-swap">Keep ${n.exercise.name}</button>
  `}function Vn(e,t,n){let r=X(e);if(!r)return``;let i=r.exercise.weightKind??`load`,a=h(r.exercise,e.prescription),o=r.exercise.equipment.includes(`dumbbells`),s=i===`assist`?`Help from the machine (lb)`:o?`Weight (lb, per dumbbell)`:`Weight (lb)`,c=(e,t,n,r)=>`
    <label class="stepper-label" for="log-${e}">${t}</label>
    <div class="stepper">
      <button type="button" class="step-button" data-step="${e}" data-delta="${-r}" aria-label="Less">−</button>
      <input id="log-${e}" type="number" inputmode="decimal" min="0" value="${n}" data-field="${e}" />
      <button type="button" class="step-button" data-step="${e}" data-delta="${r}" aria-label="More">+</button>
    </div>
  `;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>Set ${e.setNumber} done</h1>
      <p class="lead">${r.exercise.name}: what did you do?</p>
    </header>

    <section class="card">
      ${i===`bodyweight`?``:c(`weight`,s,t.weight,5)}
      ${c(`amount`,a.unit===`seconds`?`Seconds held`:`Reps`,t.amount,1)}
      ${n?`<p class="form-error" role="alert">${n}</p>`:``}
    </section>

    <button type="button" class="primary big" data-action="save-set">Save set</button>
  `}function Hn(e,t,n,r){let i=X(e);if(!i)return``;let a=e.setNumber===1?`Next exercise: <strong>${i.exercise.name}</strong>`:`Next: set ${e.setNumber} of ${e.prescription.sets}, ${i.exercise.name}`;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>Rest</h1>
    </header>

    <section class="card rest-card">
      <p class="timer" data-timer aria-live="off">${fe(An(e,t))}</p>
      <p>${a}</p>
      <p class="hint">You'll hear when rest is over. Sharing a machine? No rush: the next set waits until you tap Set done.</p>
    </section>

    <div class="button-row">
      <button type="button" class="secondary" data-action="add-rest">+30 seconds</button>
      <button type="button" class="secondary" data-action="skip-rest">Skip rest</button>
    </div>
    ${Pt(e.day,r)}
    ${Ln(n)}
  `}function Un(e,t,n){return`
    <header class="screen-header">
      <p class="eyebrow">Workout done</p>
      <h1>Nice work!</h1>
      <p class="lead">Your sets are saved, so next time you'll see what you did today.</p>
    </header>

    <section class="card">
      <h2>Today</h2>
      <ul class="summary">${e.exercises.map(n=>{let r=Q(t,e,n.exercise.id),i=h(n.exercise,e.prescription).unit,a=r.length>0?J({date:``,sets:r},i):`skipped`;return`<li><strong>${n.exercise.name}</strong><br /><span class="hint">${a}</span></li>`}).join(``)}</ul>
    </section>

    <section class="card">
      <h2>Cool down</h2>
      <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
      ${j(n,`warm-up`)}
    </section>

    <button type="button" class="primary" data-action="close-session">Back to workouts</button>
  `}function Wn(e,t){let n=h(t.exercise,e.prescription);return`${n.min} to ${n.max} ${n.unit}`}function Gn(e,t){let n=X(e);if(!n)return``;let r=[e.setNumber===1?`${n.exercise.name}.`:``,`Set ${e.setNumber} of ${e.prescription.sets}.`,`${Wn(e,n)}.`],i=Fn(t,e,n);return e.setNumber===1&&i.weight!==null&&r.push(`Try ${i.weight} pounds.`),r.filter(Boolean).join(` `)}function Kn(e){return`Rest ${e.prescription.restSeconds} seconds.`}function qn(e){let t=X(e);return t?e.setNumber===1?`10 seconds. Next up, ${t.exercise.name}.`:`10 seconds. Get ready for set ${e.setNumber}.`:``}var Jn=10,Yn=30,Xn=`If the pain was sharp or keeps coming back, stop and get it checked.`;function Zn(e){let t=Nn(),n=t.profile?t.equipmentConfirmed?`today`:`equipment`:`profile`,i=a(new Date),o=null,s=t.profile?{...t.profile}:{...K},c,l={...et},u={...vn},d=!0,f={weight:``,amount:``},p=``,g,_=!1,v=``,y=null,b=!1,x=Ot(k,E),S=`caches`in window?At(window.caches):null,C=wt().length,w={kind:`checking`};function T(e){E(Z(t)?e:`Couldn't save on this device — changes last until you close the page.`)}function E(t){let n=e.querySelector(`.toast`);n&&(n.textContent=t,n.classList.add(`visible`),window.clearTimeout(c),c=window.setTimeout(()=>n.classList.remove(`visible`),2500))}function D(e){d&&e&&Le(e,{onStart:x.duck,onEnd:x.restore})}function O(e){n=e,e===`profile`&&(s=t.profile?{...t.profile}:{...K}),k(),window.scrollTo(0,0)}function k(){let n=t.profile!==null&&t.equipmentConfirmed,r=t.session!==null;document.body.classList.toggle(`has-nav`,n&&!r),e.innerHTML=`
      <main class="screen">${r?Be():te()}</main>
      ${n&&!r?be():``}
      <div class="toast" role="status" aria-live="polite"></div>
    `}function te(){if(n===`profile`)return re();if(n===`equipment`)return le();if(n===`progress`){let e=(t.profile??K).weekPlan.filter(Boolean).length;return _n(t.history,new Date,e,t.recovery)}return n===`fuel`?st(t.nutrition,a(new Date),l):ye()}function A(e,t,n,r,i=``){return`<button type="button" class="chip${r?` active`:``}" data-group="${e}" data-value="${t}" aria-pressed="${r}">
      <span>${n}</span>${i?`<small>${i}</small>`:``}
    </button>`}function re(){let e=t.profile===null;return`
      <header class="screen-header">
        <h1>${e?`Let's set up your workouts`:`Your profile`}</h1>
        <p class="lead">This shapes which exercises you get and how many sets and reps. It stays on this phone.</p>
      </header>

      <section class="card">
        <h2>Your goal</h2>
        <div class="chip-col">
          ${It.map(e=>A(`goal`,e.id,e.label,s.goal===e.id,e.detail)).join(``)}
        </div>
      </section>

      <section class="card">
        <h2>Lifting experience</h2>
        <div class="chip-row">
          ${Lt.map(e=>A(`experience`,e.id,e.label,s.experience===e.id)).join(``)}
        </div>
      </section>

      <section class="card">
        <h2>Your week</h2>
        <p class="hint">Pick a workout for each day, or Rest. Legs days include abs. You can change this any time.</p>
        ${Pe(s.weekPlan)}
      </section>

      ${t.profile?we(t.calendar,ie(t.profile)):``}
      ${S&&t.profile?Mt(w,C):``}
      ${Ft()}

      <section class="card">
        <h2>Areas to protect</h2>
        <p class="hint">Tick anything that's injured, painful, or tight. Risky exercises for these areas are left out, and gentler ones are picked instead.</p>
        <div class="chip-row">
          ${Rt.map(e=>A(`area`,e.id,e.label,s.protectedAreas.includes(e.id))).join(``)}
        </div>
        <p class="disclaimer">This app isn't medical advice. If something hurts beyond normal muscle tiredness, stop, and check with a doctor or physical therapist about what's safe for you.</p>
      </section>

      ${ae()}

      <button type="button" class="primary" data-action="save-profile">${e?`Next: your gym's equipment`:`Save profile`}</button>
      ${e?``:`<button type="button" class="secondary" data-nav="equipment">Edit gym equipment</button>`}
    `}function ie(e){return JSON.stringify(s.weekPlan)!==JSON.stringify(e.weekPlan)}function ae(){let e=t.profile?.avoidedExerciseIds??[];return e.length===0?``:`
      <section class="card">
        <h2>Exercises that hurt</h2>
        <p class="hint">You marked these as hurting, so they're left out of your workouts.</p>
        <ul class="avoided-list">${e.filter(e=>r[e]).map(e=>`
        <li class="avoided-item">
          <span>${r[e].name}</span>
          <button type="button" class="link-button" data-action="unavoid" data-exercise="${e}">Bring back</button>
        </li>`).join(``)}</ul>
      </section>
    `}function oe(e,n){if(!t.profile)return;let r=t.profile.avoidedExerciseIds.filter(t=>t!==e);t.profile={...t.profile,avoidedExerciseIds:n?[...r,e]:r},s={...s,avoidedExerciseIds:t.profile.avoidedExerciseIds}}function le(){let e=!t.equipmentConfirmed,n=new Set(t.equipmentIds);return`
      <header class="screen-header">
        <h1>What does your gym have?</h1>
        <p class="lead">Untick anything your gym doesn't have. You'll only get exercises you can actually do there.</p>
      </header>

      <section class="card equipment-list">
        ${Fe.map(e=>`
          <label class="equipment-item">
            <input type="checkbox" data-equipment="${e.id}" ${n.has(e.id)?`checked`:``} />
            <span><strong>${e.name}</strong><small>${e.hint}</small></span>
          </label>`).join(``)}
      </section>

      <button type="button" class="primary" data-action="save-equipment">${e?`See today's workout`:`Save equipment`}</button>
    `}function M(e,n,r){let{exercise:i}=e,a=Vt(t.history,i.id);return`
      <article class="exercise">
        <details>
          <summary>
            <span class="exercise-number">${n+1}</span>
            <span class="exercise-title">
              <strong>${i.name}</strong>
              <small>${i.muscles}</small>
              ${a?`<small class="last-time">Last time: ${J(a,r)}</small>`:``}
            </span>
            <span class="chevron" aria-hidden="true"></span>
          </summary>
          ${ue(e)}
          ${de(e)}
          <button type="button" class="link-button hurt-link" data-action="avoid" data-exercise="${i.id}">This hurts me, replace it</button>
        </details>
      </article>
    `}function pe(e){return ne(e,t.profile??K,t.equipmentIds)}function N(){let e=De(new Date,(t.profile??K).weekPlan,t.workoutLog),n=e.find(e=>e.key===i)??e.find(e=>e.isToday)??e[0];return{week:e,selected:n,shown:(n.isToday&&n.status!==`done`?o:null)??n.workout}}function he(e){t.workoutLog=[...t.workoutLog,{date:new Date().toISOString(),day:e}],o=null}function _e(e){return`
      <details class="card switcher">
        <summary>Switch today's workout</summary>
        <p class="hint">Want a different one today? Pick it here. Your week plan stays as it is.</p>
        ${ce(e,`Workout for today`)}
      </details>`}function P(){return on(t.recovery,a(new Date))}function ve(e){return e?bn(P(),u):``}function ye(){let{week:e,selected:t,shown:n}=N(),r=je(e,t.key);if(n===null)return`
        <header class="screen-header">
          <p class="eyebrow">${ke(t)}</p>
          <h1>Rest day</h1>
        </header>
        ${r}
        ${ve(t.isToday)}
        ${Ne(t)}
      `;let i=pe(n),a=t.status===`done`,o=t.status===`missed`,s=t.isToday&&!a,c=e.some(e=>e.isToday&&e.status!==`done`),l=i.exercises.length>0,u=l?i.exercises.map((e,t)=>M(e,t,h(e.exercise,i.prescription).unit)).join(``):`<section class="card empty">
           <p>None of your gym's equipment fits this day yet.</p>
           <button type="button" class="secondary" data-action="go-equipment">Check your equipment</button>
         </section>`,d=l?a?`<p class="notice done-note">✓ Done. Your sets from this workout are in the Progress tab.</p>`:s?`<button type="button" class="primary big" data-action="start-workout">Start workout</button>
             <p class="hint start-hint">Talks you through each set with a rest timer. Headphones recommended.</p>`:o?`<p class="notice">○ This one wasn't logged. It was planned for ${Ee[t.weekdayIndex]}.</p>
               ${c?`<button type="button" class="secondary" data-action="do-today" data-workout="${n}">Do it today instead</button>`:``}`:`<p class="hint start-hint">Coming up. You can start it on the day.</p>`:``;return`
      <header class="screen-header">
        <p class="eyebrow">${t.isToday?`Today's workout`:ke(t)}</p>
        <h1>${se(n,i.title)}</h1>
      </header>

      ${r}

      ${ve(t.isToday)}

      ${d}
      ${s?_e(n):``}

      ${Nt(n,x.current())}

      <section class="card">
        <h2>Warm up first</h2>
        ${j(i.warmUp,`warm-up`)}
      </section>

      <section class="card prescription">
        <h2>For every exercise</h2>
        <p>${m(i.prescription)}</p>
      </section>

      <p class="tap-hint">Tap an exercise to see how to do it.</p>
      <div class="exercise-list">${u}</div>

      <section class="card">
        <h2>Cool down</h2>
        <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
        ${j(i.coolDown,`warm-up`)}
      </section>

      ${l&&s?`<button type="button" class="secondary" data-action="finish-workout">Mark done without workout mode</button>`:``}
    `}function be(){let e=(e,t)=>`<button type="button" class="nav-item${n===e||e===`profile`&&n===`equipment`?` active`:``}" data-nav="${e}">${t}</button>`;return`<nav class="bottom-nav" aria-label="Main">${e(`today`,`Workout`)}${e(`progress`,`Progress`)}${e(`fuel`,`Fuel`)}${e(`profile`,`Profile`)}</nav>`}function xe(){let t=e.querySelector(`input[data-field="checkin-hours"]`),n=e.querySelector(`input[data-field="checkin-readiness"]`);t&&(u.hours=t.value),n&&(u.readiness=n.value)}function Se(e,n){if(xe(),e===`checkin-open`){let e=P();u={open:!0,feel:e?.feel??null,hours:e?.hours===null||e===void 0?``:String(e.hours),readiness:e?.readiness===null||e===void 0?``:String(e.readiness),error:``}}else if(e===`checkin-feel`)u={...u,feel:Number(n),error:``};else if(e===`checkin-cancel`)u={...vn};else if(e===`checkin-save`){let e=cn(u.feel,u.hours,u.readiness);if(!e.ok)u={...u,error:e.error};else{t.recovery=sn(t.recovery,{date:a(new Date),feel:e.feel,hours:e.hours,readiness:e.readiness}),u={...vn},Z(t),k(),E(`Check-in saved.`);return}}k()}function F(){n===`profile`&&!t.session&&k()}function Te(){S?.savedCount().catch(()=>0).then(e=>{w=e===C?{kind:`saved`}:{kind:`idle`,saved:e},F()})}async function Oe(){if(S&&w.kind!==`saving`){w={kind:`saving`,done:0},F();try{await S.save(e=>{w={kind:`saving`,done:e},F()}),w={kind:`saved`},F(),E(`Music saved on this phone.`)}catch{w={kind:`error`,message:`Couldn't save all the music. Check your connection and free space on this phone, then try again.`,saved:await S.savedCount().catch(()=>0)},F()}}}async function Ae(){await S?.remove(),w={kind:`idle`,saved:0},F(),E(`Saved music removed. Songs will play from the internet.`)}function Me(){let n=e.querySelector(`input[data-field="cal-time"]`)?.value??``;if(!ge(n)){E(`Pick a start time first.`);return}let r=Number(e.querySelector(`select[data-field="cal-minutes"]`)?.value),i=me.includes(r)?r:t.calendar.minutes;t.calendar={time:n,minutes:i},Z(t);let a=(t.profile??K).weekPlan;Re(`gym-guide-week.ics`,`text/calendar;charset=utf-8`,Ce(a,t.calendar,new Date)),E(`Calendar file downloaded. Open it to add your workouts.`)}function I(t){return e.querySelector(`input[data-field="${t}"]`)?.value??``}function Ie(){l={name:I(`protein-name`),grams:I(`protein-grams`),goal:I(`protein-goal`),error:``,calorieName:I(`calorie-name`),calories:I(`calorie-amount`),calorieGoal:I(`calorie-goal`),calorieError:``}}function L(e,n,r){Ie();let i=a(new Date),o=t.nutrition;if(e===`water`)t.nutrition=We(o,i,Number(n));else if(e===`water-goal`)t.nutrition={...o,waterGoal:Math.min(20,Math.max(1,o.waterGoal+Number(n)))};else if(e===`quick-protein`){let e=He[Number(r)];e&&(t.nutrition=Ge(o,i,e))}else if(e===`add-protein`){let e=$e(l.name,l.grams);e?l.error=e:(t.nutrition=Ge(o,i,{name:l.name.trim(),grams:Number(l.grams)}),l={...l,name:``,grams:``})}else if(e===`remove-protein`)t.nutrition=Ke(o,i,Number(r));else if(e===`set-protein-goal`){let e=Number(l.goal);!Number.isInteger(e)||e<1||e>400?l.error=`Enter a protein goal in whole grams, between 1 and 400.`:t.nutrition={...o,proteinGoal:e}}else if(e===`clear-protein-goal`)l.goal=String(o.proteinGoal??``),t.nutrition={...o,proteinGoal:null};else if(e===`quick-calories`){let e=Ue[Number(r)];e&&(t.nutrition=qe(o,i,e))}else if(e===`add-calories`){let e=Xe(l.calorieName,l.calories);e?l.calorieError=e:(t.nutrition=qe(o,i,{name:l.calorieName.trim(),kcal:Number(l.calories)}),l={...l,calorieName:``,calories:``})}else if(e===`remove-calories`)t.nutrition=Je(o,i,Number(r));else if(e===`set-calorie-goal`){let e=Ze(l.calorieGoal);e?l.calorieError=e:t.nutrition={...o,calorieGoal:Number(l.calorieGoal)}}else e===`clear-calorie-goal`&&(l.calorieGoal=String(o.calorieGoal??``),t.nutrition={...o,calorieGoal:null});Z(t)||(l.error=`Couldn't save on this device.`),k()}function Be(){let e=t.session;if(!e)return``;if(b)return zn(e,t.history);switch(e.phase){case`lift`:return y?Bn(e,y):Rn(e,t.history,d,v,x.current());case`log`:return Vn(e,f,p);case`rest`:return Hn(e,Date.now(),d,x.current());case`done`:return Un(e,t.history,pe(e.day).coolDown)}}function R(){let e=t.session,n=e&&X(e);if(!e||!n)return;let r=Q(t.history,e,n.exercise.id),i=r[r.length-1],a=Fn(t.history,e,n),o=h(n.exercise,e.prescription),s=i?.weight??a.weight;f={weight:s==null?``:String(s),amount:String(i?.amount??o.max)},p=``}function B(t){return e.querySelector(`input[data-field="${t}"]`)?.value.trim()??``}function Ve(){let e=t.session,n=e&&X(e);if(!e||!n)return;let r=(n.exercise.weightKind??`load`)===`bodyweight`;f={weight:B(`weight`),amount:B(`amount`)};let i=Number(f.amount);if(!Number.isInteger(i)||i<1||i>300){p=`Enter how many reps (or seconds) you did, as a whole number.`,k();return}let a=null;if(!r&&(a=Number(f.weight),f.weight===``||!Number.isFinite(a)||a<0||a>1e3)){p=`Enter the weight in pounds. Use 0 if there was no added weight.`,k();return}t.history=Ut(t.history,n.exercise.id,e.startedAt,{weight:a,amount:i}),t.session=Tn(e,Date.now()),Z(t),V()}function V(e=!0){window.clearInterval(g);let n=t.session;n&&(n.phase===`rest`?(_=An(n,Date.now())<=Jn,D(Kn(n)),g=window.setInterval(H,250)):n.phase===`lift`?e&&D(Gn(n,t.history)):n.phase===`done`&&(z(!1),he(n.day),Z(t),D(`Workout complete. Nice work!`),ze([200,100,200])),k(),window.scrollTo(0,0))}function H(){let n=t.session;if(!n||n.phase!==`rest`){window.clearInterval(g);return}let r=An(n,Date.now()),i=e.querySelector(`[data-timer]`);i&&(i.textContent=fe(r)),!_&&r<=Jn&&r>0&&(_=!0,D(qn(n))),r===0&&(ze([300]),t.session=En(n),Z(t),D(`Go.`),window.setTimeout(()=>V(),d?900:0),window.clearInterval(g))}function U(){window.clearInterval(g),y=null,b=!1,z(!1),t.session=null,i=a(new Date),o=null,Z(t),O(`today`)}function Ye(){let e=t.session,n=e&&X(e);if(!e||!n||!t.profile)return;oe(n.exercise.id,!0);let r=e.exercises.map(e=>e.exercise.id),[i]=ee(n,t.profile,t.equipmentIds,r);i?(t.session=kn(e,i),v=`Switched from ${n.exercise.name} to ${i.exercise.name}, which works the same muscles. ${Xn}`,D(`Switched to ${i.exercise.name}.`)):(t.session=On(e),v=`Skipped ${n.exercise.name}. There's no gentler option for it with your equipment. ${Xn}`),Z(t),V(!i)}function Qe(n,r){let i=t.session;if(i){if(n!==`hurt`&&n!==`toggle-voice`&&(v=``),n===`open-swap`){let e=X(i);if(!e||!t.profile)return;let n=i.exercises.map(e=>e.exercise.id);y=ee(e,t.profile,t.equipmentIds,n),k(),window.scrollTo(0,0)}else if(n===`choose-swap`){let e=y?.[Number(r)];if(y=null,!e)return;t.session=kn(i,e),Z(t),V()}else n===`cancel-swap`?(y=null,k()):n===`hurt`?Ye():n===`set-done`?(t.session=wn(i),R(),k(),e.querySelector(`input[data-field="amount"]`)?.select()):n===`save-set`?Ve():n===`add-rest`?(t.session=Dn(i,Yn,Date.now()),_=!1,Z(t),H()):n===`skip-rest`?(t.session=En(i),Z(t),V()):n===`skip-exercise`?(t.session=On(i),Z(t),V()):n===`play-music`?x.play(i.day):n===`stop-music`?x.stop():n===`toggle-voice`?(d=!d,d||window.speechSynthesis?.cancel(),k()):n===`end-workout`?(b=!0,k(),window.scrollTo(0,0)):n===`cancel-end`?(b=!1,k()):n===`confirm-end`?(i.exercises.some(e=>Q(t.history,i,e.exercise.id).length>0)&&he(i.day),U()):n===`close-session`&&U()}}e.addEventListener(`change`,e=>{let n=e.target;n.dataset.field===`cal-time`&&ge(n.value)?(t.calendar={...t.calendar,time:n.value},Z(t)):n.dataset.field===`cal-minutes`&&me.includes(Number(n.value))&&(t.calendar={...t.calendar,minutes:Number(n.value)},Z(t))}),e.addEventListener(`click`,c=>{let l=c.target.closest(`[data-point]`);if(l){let e=l.closest(`.progress-card`)?.querySelector(`.chart-caption`);e&&(e.textContent=l.dataset.point??``);return}let u=c.target.closest(`button`);if(!u)return;let{group:d,value:f,action:p,day:m,date:h,nav:g,step:_,delta:v,exercise:y,index:b,planDay:S,planWorkout:C,workout:w}=u.dataset;if(_&&v){let t=e.querySelector(`input[data-field="${_}"]`);t&&(t.value=String(Math.max(0,(Number(t.value)||0)+Number(v))));return}if(S!==void 0&&C){let e=Number(S),t=C===`rest`?null:C,n=s.weekPlan.map((n,r)=>r===e?t:n);if(!n.some(Boolean)){E(`Keep at least one workout day.`);return}s.weekPlan=n,k();return}if(d&&f){if(d===`goal`&&(s.goal=f),d===`experience`&&(s.experience=f),d===`area`){let e=f,t=s.protectedAreas;s.protectedAreas=t.includes(e)?t.filter(t=>t!==e):[...t,e]}k();return}if(h){i=h,o=null,k();return}if(m){o=m,k();return}if(g){O(g);return}if(p){if(t.session){Qe(p,b);return}if(n===`fuel`){L(p,v,b);return}if(p.startsWith(`checkin-`)){Se(p,f);return}if(p===`save-profile`){let e=t.profile===null;t.profile={...s},e?(Z(t),O(`equipment`)):(O(`today`),T(`Profile saved — your workouts are updated.`))}else if(p===`save-equipment`)t.equipmentIds=[...e.querySelectorAll(`input[data-equipment]`)].filter(e=>e.checked).map(e=>e.dataset.equipment??``),t.equipmentConfirmed=!0,O(`today`),T(`Equipment saved.`);else if(p===`avoid`&&y)oe(y,!0),k(),T(`${r[y]?.name??`That exercise`} won't be planned again. Bring it back any time in Profile.`);else if(p===`unavoid`&&y)oe(y,!1),k(),T(`${r[y]?.name??`That exercise`} is back in your workouts.`);else if(p===`go-equipment`)O(`equipment`);else if(p===`add-to-calendar`)Me();else if(p===`save-music-offline`)Oe();else if(p===`remove-music-offline`)Ae();else if(p===`play-music`&&w)x.play(w);else if(p===`stop-music`)x.stop();else if(p===`do-today`&&w)i=a(new Date),o=w,k(),window.scrollTo(0,0);else if(p===`start-workout`){let{shown:e}=N();if(!e)return;let n=P();t.session=xn(pe(e),new Date,n?tn(n):null),Z(t),z(!0),V()}else if(p===`finish-workout`){let{shown:e}=N();if(!e)return;he(e),O(`today`),T(`Nice work! It's marked done on your calendar.`)}}}),Te(),t.session&&(t.session.phase===`rest`&&An(t.session,Date.now())===0&&(t.session=En(t.session)),t.session.phase===`log`&&R(),z(t.session.phase!==`done`),t.session.phase===`rest`&&(g=window.setInterval(H,250))),k()}var Qn=document.querySelector(`#app`);Qn&&Zn(Qn),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});